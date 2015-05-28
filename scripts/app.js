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
            console.log('Resetting counter');
            $('.cellAmount').val(0);
            $('.percentCell').text(0);
            $('#percentcelltot').text('100%');
        },

        writeInstructions: function(instructions){
            $('div.instruct-div').html(instructions);
        },
        toggleSpecType: function(toType) {
            console.log('Switching to ' + toType);
            switch (toType) {
                case 'bm':
                    var hideType = 'pb';
                    break;
                case 'pb':
                    var hideType = 'bm';
                    break;
            }
            console.log('Hiding ' + hideType);
            $('.' + toType).removeClass('hidden');
            $('.' + hideType).addClass('hidden');
        }
    };
})(jQuery);
