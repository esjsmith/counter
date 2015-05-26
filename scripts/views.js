/**
 * Created by emilypatonay on 5/19/15.
 */

(function($){
    'use strict';

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
            // TODO: listenTo keypresses

            // Instantiate the CounterTable model to cause it to get the
            // JSON that will serve as the template for the counter table
            var that = this;
            (new app.m.CounterTable()).fetch({
                reset: true,
                success: function(response){
                    /* Iterate through each of the objects. There should only be two:
                    * on for bm and one for pb. Use this to make the four rows comprising
                    * the counter table.*/
                    _.each(response.attributes, function(item){
                        that.mkTitleRow(item.outCodes);
                        that.mkSpinnerRow(item.outCodes);
                        that.mkPercentRow(item.outCodes);
                        that.mkKeyRow(item.outCodes);
                    });
                    that.target.html(that.el);
                    /* Now, call the function that instantiates the output area view, ie,
                    app.v.CreateOutputField.
                    * */
                    that.createOutputArea(response.attributes);
                 }
            });
        },
        events: {
            // TODO: Make custom even that fires when options menu changed b/w bm and pb
        },
        createOutputArea: function(data){
            /*
            Instantiate the app.v.CreateOutputField, passing in the `data` parameter
            as the model
             */
            new app.v.CreateOuputField({model: data});

            // Now, instantiate app.v.Buttons to make the buttons
            new app.v.Buttons();
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

            return this;

        }
    });

    app.v.CreateOuputField = Backbone.View.extend({
        tagName: 'div',
        id: 'tabs',

        // This is where the rendered output div will go
        el: $('.output'),

        initialize: function(){
            this.specimenType = this.model.specimenType;
            var that = this;
            // TODO: Add 'if' that looks for bm vs pb
            /* the model is supposed to only have two objects: one for bm and one
            for bp. Iterate through both of the objects in the template and use the one
            that matches the options menu: either bp or bm
             */
            _.each(this.model.attributes, function(item){
                if (item.specimenType === that.specimenType) {
                    that.tplJson = item;
                }
            });

        },
        mkTabs: function(data){
            //TODO: Makes the ul with the anchor href=#tabs-1, -2, etc
            // TODO: use a view so that the view can be watched
        },
        mkContents: function(data){
            // TODO: Publish the results of the counts here
        }
    });

    app.v.Buttons = Backbone.View.extend({
        tagName: 'div',
        el: $('#buttons'),
        template: Handlebars.compile($('#buttons-tpl').html()),
        initialize: function(){
            this.$el.html(this.template());
        }
    });

})(jQuery);