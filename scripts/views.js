/**
 * Created by emilypatonay on 5/19/15.
 */

(function($){
    app.v.MakeTable = Backbone.View.extend({
        tagName: 'td',
        model: new app.m.KeysUsed(),
        template: Handlebars.compile($('#table-tpl').html()),
        target: $('#counter-tbl'), // This is where the rendered tpl will go

        initialize: function(response) {
            // TODO: call in the data object from tblData
            // TODO: render table
            // TODO: listenTo keypresses
        }
    });
})(jQuery);