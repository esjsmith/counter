/**
 * Created by emilypatonay on 5/19/15.
 */


// HANDLEBARS HELPERS

// OTHER FUNCTIONS
(function($){
    app.CONSTANTS = {
        ESC_KEY: $.ui.keyCode.ESCAPE,
        83: 'S',
        65: 'A',
        68: 'D',
        70: 'F',
        90: 'Z',
        88: 'X',
        67: 'C',
        86: 'V',
        66: 'B'

    };

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

    app.utils = {
        btnStart: function(){
            $('#buttons').on('click', '#btnStartCount', function(){
                console.log("Starting counting.");

                /*
                * Whenever the user clicks "Start Count," disable the button.
                * This prevents each cunt being rgistered as may times as the start
                * button is pressed. If you would like to play a practical joke on
                * the poor user, then trigger the start button multiple times.
                */
                document.getElementById('btnStartCount').disabled = true;

                /* Listen to keyboard keypresses. Binding to document level so that
                 I don't have to worry about setting focus to anything.
                  */


                $(document).keydown(function(ev){
                    // First, make sure escape key doesn't do anything untoward
                    var x = app.CONSTANTS[ev.which];
                    console.log(x + ' ' + _.isString(x));

                    // Fire up the KeyPress library
                    var listener = new window.keypress.Listener();
                    listener.simple_combo(x, function(){
                        console.log('pressed ');
                    });
                });
            })
        }
    };
})(jQuery);
