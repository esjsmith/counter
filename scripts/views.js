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
            console.log(response);
            return this;
        }
    });

    app.v.MakeTable = Backbone.View.extend({
        tagName: 'table',
        id: 'counter-tbl',
        className: 'table',
        template: Handlebars.compile($('#table-tpl').html()),
        el: $('#counter-tbl'), // This is where the rendered tpl will go

        initialize: function() {
            // TODO: call in the data object from tblData
            // TODO: render table one by one and then append to DOM
            // TODO: listenTo keypresses
            this.model = new app.m.KeysRow();
            console.log(this.model);
            var mkKeyRow = new app.v.MkKeyRow({model: this.model});
            console.log(mkKeyRow);
        }
    });
})(jQuery);