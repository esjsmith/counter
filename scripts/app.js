/**
 * Created by emilypatonay on 5/19/15.
 */


// HANDLEBARS HELPERS

// OTHER FUNCTIONS
(function($){
    app.tools = {
        tabbedOutput: function(){
            $('ul.tabs li').click(function() {
                var tab_id = $(this).attr('data-tab');

                $('ul.tabs li').removeClass('current');
                $('.tab-content').removeClass('current');

                $(this).addClass('current');
                $("#" + tab_id).addClass('current');
            })
        },
        resetCounter: function(){
            // This will allow the counters to all be set to 0
            // to start the script
            console.log('resetting counter');
            $('.cellAmount').val(0);
            $('.cellPercent').text(0);
            $('#percentcelltot').text('100%');
        }
    };
})(jQuery);
