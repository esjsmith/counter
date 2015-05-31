/**
 * Created by emilypatonay on 5/19/15.
 */


// HANDLEBARS HELPERS

// OTHER FUNCTIONS
(function($){
    app.CONSTANTS = {
        // TODO: find a library that translates key code to capital letter string
        ESC_KEY: $.ui.keyCode.ESCAPE
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
        resetCounter: function(specType){
            // This will allow the counters to all be set to 0
            // to start the script
            var x = 'table.' + specType;
            $(x).find('.cellAmount').val(0);
            $(x).find('.percentCell').text(0);
            $(x).find('#percentcelltot').text('100%');
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
                * This prevents each cunt being registered as may times as the start
                * button is pressed. If you would like to play a practical joke on
                * the poor user, then trigger the start button multiple times.
                */
                document.getElementById('btnStartCount').disabled = true;

                /* Listen to keyboard keypresses. Binding to document level so that
                 I don't have to worry about setting focus to anything.
                */

                $(document).keydown(function(ev){
                    // Pass in the string corresponding to the key code to the
                    // adding function.

                    app.utils.addToCell(String.fromCharCode(ev.which));
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
                    app.utils.calcPercent(whichTable, whichCell);

                })(whichTable, whichCell);
            });
        },
        calcPercent: function(whichTable, whichLetter){
            /*
            * The following goes through each percentCell in the table designated
            * by the whichTable variable.
            */
            var x = $(whichTable).find('.datacell').find('.cellAmount');
            var info = x.map(function () { return $(this).val(); }).get();
            var newPercVal;
            _.each(x, function(item){
                var itemId = ($(item).attr('id'));
                if (itemId.substr(-3) === 'tot'){
                    // console.log('tot = ' + $('#' + itemId).val());

                } else {
                    newPercVal = $(item).val() / $(whichTable + ' #numcelltot').val();
                    newPercVal = newPercVal * 100;
                    newPercVal = newPercVal.toFixed(2) + '%';

                    console.log($(whichTable + ' #percentcell' + itemId.substr(-1)).text(newPercVal));
                }

            })
        }
    };
})(jQuery);
