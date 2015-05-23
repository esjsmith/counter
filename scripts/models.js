/**
 * Created by emilypatonay on 5/21/15.
 */

(function($){
    app.m.KeysRow = Backbone.Model.extend({
        url: 'settings/keyboard.json'

    });

    app.m.Test = Backbone.Model.extend({
        defaults: {
            a: 'b',
            d: 'c'
        }
    });
})(jQuery);