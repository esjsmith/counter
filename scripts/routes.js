/**
 * Created by emilypatonay on 5/20/15.
 */

(function($){
    app.r.initPage = new (Backbone.Router.extend({
        routes: {
            '': 'buildPage',
            '/pb': 'showPb',
            '/bm': 'showBm'
        },
        buildPage: function(){
            console.log('at root with router');
            (new app.m.CounterTable()).fetch({
                reset: true,
                success: function(response){
                    /* Iterate through each of the objects. There should only be two:
                     * on for bm and one for pb. Use this to make the four rows comprising
                     * the counter table.*/
                    _.each(response.attributes, function(item){
                        console.log(item);
                    });
                }

                });
        },
        showPb: function(){
            // TODO: move class `hidden` from pb counter table and output to bm
        },
        showBm: function(){
            // TODO: move class `hidden` from bm counter table and output to pb
        }
    }));

    Backbone.history.start();
})(jQuery);