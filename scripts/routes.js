/**
 * Created by emilypatonay on 5/20/15.
 */

(function($){
    app.r.mainRouter = new (Backbone.Router.extend({
        routes: {
            'counter(/)': 'buildPage',
            'spectype/:specType(/)': 'changeSpecimenType'
        },
        initialize: function(){
            this.route('counter(/)', 'buildPage');
        },
        buildPage: function(){
            console.log('Initializing counter app.');
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
        changeSpecimenType: function(specType){
            console.log(specType);
        }
    }));

    Backbone.history.start({root: '/', pushState: true});
})(jQuery);