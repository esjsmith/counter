/**
 * Created by emilypatonay on 5/20/15.
 */

(function($){
    app.r.initPage = new (Backbone.Router.extend({
        routes: {
            // TODO: change /table.html to root once ready for production
            '/table.html': 'buildPage'
        },
        buildPage: function(){
            console.log('at root with router')
        }
    }));
})(jQuery);