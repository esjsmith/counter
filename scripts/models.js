/**
 * Created by emilypatonay on 5/21/15.
 */

(function($){
    app.m.KeysUsed = Backbone.Model.extend({
        url: 'settings/keyboard.json',
        initialize: function(){
            this.tblData(); this.tblKeysUsed();
            console.log(this);
        },
        tblData: function(){
            // TODO: Verify that the keysUsed.length === outputTpl.length
            // Put out the data in an object {keysUsed: [...], cellNames: [...]
            var that = this;
            $.getJSON('settings/outputTpl.json', function(data){
                that.tblTpl = data;
            });
        },
        tblKeysUsed: function(){
            var that = this; that.keysUsed = {};
            // Gets the JSON list of keys to be used for app on initialization
            $.getJSON('settings/keyboard.json', function(data){
                that.keysUsed = data; console.log(data === that.keysUsed);
            });
        }
    });
})(jQuery);