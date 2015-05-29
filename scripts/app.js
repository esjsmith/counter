/**
 * Created by emilypatonay on 5/19/15.
 */


// HANDLEBARS HELPERS

// OTHER FUNCTIONS
(function($){
    app.CONSTANTS = {
        // TODO: find a library that translates key code to capital letter string
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
                    var x = app.CONSTANTS[ev.which];

                    // Pass in the string corresponding to the key code to the
                    // adding function. Make sure the key is defined first, though.
                    if (x){
                        app.utils.addToCell(x);
                    }


                });
            })
        },
        addToCell: function(whichCell){
            // This function takes the data from the listener
            // below and adds one to each cell when that button
            // is pressed

            /*
            * Because there are two specimen types by default (bm and pb),
            * the specTypes variable will contain both. I can then iterate
            * over each of them and run through this method twice.
            * */

            // TODO: create the specTypes array from the model that loads from templates.json
            var specTypes = ['bm', 'pb'];
            _.each(specTypes, function(item){
                var whichTable = 'table.' + item;
                (function (whichTable, whichCell){
                    var curAmount, newAmount, curTot, newTot, totCell, wchCellStr, findCell;
                    wchCellStr = "#numcell" + whichCell.toUpperCase();
                    findCell = $(whichTable).find(wchCellStr);
                    curAmount = findCell.val();

                    // Increase the chosen cell by one
                    newAmount = (curAmount * 1 + 1);
                    findCell.val("");
                    findCell.val(newAmount);

                    // Increase the total cell by one
                    totCell = $(whichTable).find('#numcelltot');
                    curTot = totCell.val();
                    newTot = curTot * 1 + 1;
                    totCell.val(newTot);
                    //app.utils.calcPercent();

                })(whichTable, whichCell);
            });


        },
        calcPercent: function(){
            console.log('calcPercent');
        }
    };
})(jQuery);
