/**
 * Created by emilypatonay on 5/19/15.
 */

(function($){
    'use strict';

    app.v.MkKeyRow = Backbone.View.extend({
        // Using this to render the row of keys at the bottom of the app table.
        tagName: 'tr',
        id: 'keyRow',
        initialize: function(response){
            return this;
        }
    });

    app.v.MakeTable = Backbone.View.extend({
        tagName: 'table',
        id: 'counter',
        className: 'table',
        template: Handlebars.compile($('#table-row-tpl').html()),
        templateHead: Handlebars.compile($('#table-head-tpl').html()),
        templateSpinner: Handlebars.compile($('#table-spinner-tpl').html()),
        templatePercent: Handlebars.compile($('#table-percent-tpl').html()),
        target:  $('#counter-tbl'), // This is the div where the rendered tpl will go

        initialize: function() {
            // TODO: call in the data object from tblData
            // TODO: render table one by one and then append to DOM
            // TODO: listenTo keypresses

            // Instantiate the CounterTable model to cause it to get the
            // JSON that will serve as the template for the counter table
            var that = this;
            (new app.m.CounterTable()).fetch({
                reset: true,
                success: function(response){
                    _.each(response.attributes, function(item){
                        that.mkTitleRow(item.outCodes);
                        that.mkSpinnerRow(item.outCodes);
                        // TODO: add percentage row
                        that.mkPercentRow(item.outCodes);
                        that.mkKeyRow(item.outCodes);
                    });
                    that.target.html(that.el);
                }
            });
        },
        mkTitleRow: function(data){
            // Gets all the values from data, which are the cell type abbr.
            var y = ((_.values(data)));

            // Add the cell 'tot' onto the end of the array.
            y.push('tot');

            // The HDB model looks for a cellData key to iterate through to fill in
            // the columns, so I give it. Row name is the class of the row. Corresponds
            // to CSS.
            var x = {rowName: 'namecell', cellData: y};

            // Finally, append the row just made to the item that has been building
            this.$el.html(this.templateHead(x));

            return this;
        },
        mkKeyRow: function(data){
            // Callback that makes the bottom row
            // This is called last and appends row of keys to the end of the table

            // Adds the text `Percent (%):` to a cell in front and an extra cell
            // at the end containing an em dash
            // The HDB model looks for a cellData key to iterate through to fill in
            // the columns, so I give it. Row name is the class of the row. Corresponds
            // to CSS.
            var x = {rowName: 'keys',
                cellData: (_.keys(data)).concat(['&mdash;'])};

            // Finally, append the row just made to the item that has been building
            this.$el.append(this.template(x));

            return this;
        },
        mkPercentRow: function(data){
            // This is the callback that makes the row where the percents will be displayed
            // The template returns a row of blank cells. However, the important thing is that
            // each cell will have an id that corresponds to `percentcell` + the keyboard key
            // representing that biological cell

            // First, I'll start the row off with a label cell that says `Percent (%):`. Then,
            // rowName to be `percentrow` with a cell data of the keyboard keys. The terminating
            // cell will be labeled with an id of `tot`

            var x = {rowName: 'percentrow',
                cellData: _.keys(data).concat(['tot'])
            };

            // Finally, append the row just made to the item that has been building
            this.$el.append(this.templatePercent(x));

            return this
        },
        mkSpinnerRow: function(data){
            // Callback that makes the row of spinners.
            // The HDB template inserts the keyboard key into the spinner input ID
            // in order to allow for an easy listening for the view

            // Gets all the keys from data, which are keyboard keys
            var y = ((_.keys(data)));

            // Add a cell with id of `tot` to the en of the row. The `Count:` label
            // cell has to be added in the template before the iterator to make it
            // look right.
            y = y.concat(['tot']);

            // The HDB model looks for a cellData key to iterate through to fill in
            // the columns, so I give it. Row name is the class of the row. Corresponds
            // to CSS.
            var x = {rowName: 'datacell', cellData: y};

            // Finally, append the row just made to the item that has been building
            this.$el.append(this.templateSpinner(x));
            console.log(this.el);

            return this;

        }
    });

})(jQuery);