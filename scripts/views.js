/**
 * Created by emilypatonay on 5/19/15.
 */

(function($){
    app.v.MakeTable = new (Backbone.View.extend({
        tagName: 'td',
        keyMap: '',
        model: '',
        template: Handlebars.compile($('#table-tpl').html()),
        target: $('#counter-tbl'), // This is where the rendered tpl will go
        tblData: function(){
            // TODO: Verify that the keysUsed.length === outputTpl.length
            // Put out the data in an object {keysUsed: [...], cellNames: [...]
            $.getJSON('settings/outputTpl.json', function(data){})
        },
        initialize: {
            // TODO: call in the data object from tblData
            // TODO: render table
            // TODO: listenTo keypresses
        }
    }));
})(jQuery);