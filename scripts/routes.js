/**
 * Created by emilypatonay on 5/20/15.
 */

(function($){
    app.r.initPage = new (Backbone.Router.extend({
        routes: {
            '/': 'buildPage'
        },
        buildPage: function(){
            console.log('at root with router')
        }
    }));

    Backbone.history.start();
})(jQuery);