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
            console.log('Initializing couter app.');
            (new app.m.CounterTable()).fetch({
                reset: true,
                success: function(response){
                    /* Iterate through each of the objects. There should only be two:
                     * on for bm and one for pb.
                     */
                    _.each(response.attributes, function(item){
                        /* Pass these in one at a time to a newly instantiated
                        * MakeTable view.*/
                        (new app.v.MakeTable(item));

                        // Start the initial output table
                        new app.v.CreateOuputField(item);
                     });
                }

                });
            // Now make buttons.
            new app.v.Buttons();


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