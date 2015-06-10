/**
 * Created by emilypatonay on 5/19/15.
 */


// HANDLEBARS HELPERS

// OTHER FUNCTIONS
(function($){

    app.tools = {

        resetCounter: function(specType){
            // This will allow the counters to all be set to 0
            // to start the script
            var x = 'table#' + specType;
            $(x).find('.cellAmount').val(0);
            $(x).find('.percentCell').text(0);
            $(x).find('#percentcelltot').text('100%');
        },

        writeInstructions: function(instructions){
            $('div.instruct-div').html(instructions);
        },
        toggleSpecType: function(toType) {
            // Hide one specimen type and show the other
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

        addToCell: function(whichCell){
            // This function takes the data from the listener
            // below and adds one to each cell when that button
            // is pressed

            /*
            * Because there are two specimen types by default (bm and pb),
            * the specTypes variable will contain both. I can then iterate
            * over each of them and run through this method twice.
            * */

            // TODO: make increasing numcelltot from increasing all other numcells.

            _.each(app.TPLJSON, function(item){
                var whichTable = 'table#' + item.specimenType;
                (function (whichTable, whichCell){
                    var curAmount, newAmount, curTot, newTot, totCell, wchCellStr, findCell;
                    wchCellStr = "#numcell" + whichCell.toUpperCase();
                    findCell = $(whichTable).find(wchCellStr);
                    curAmount = findCell.val();

                    // Increase the chosen cell by one
                    newAmount = (curAmount * 1 + 1);
                    findCell.val("");
                    findCell.val(newAmount);

                   /* // Increase the total cell by one
                    totCell = $(whichTable).find('#numcelltot');
                    curTot = totCell.val();
                    newTot = curTot * 1 + 1;
                    totCell.val(newTot);*/


                })(whichTable, whichCell);
            });

            /* Trigger an 'input' even each time a cell content is changed.
            * This will be listened for later on. Whenever an input is triggered
            * on this row, then, the calcPercent function is called.
            * */
            $('.dataRow').trigger('input');
        },
        calcPercent: function(whichTable){
            /*
            * The following goes through each percentCell in the table designated
            * by the whichTable variable.
            */
            var x = $('table#' + whichTable).find('.dataRow').find('.cellAmount');
            var newPercVal;
            _.each(x, function(item){
                var itemId = ($(item).attr('id'));
                if (itemId.substr(-3) === 'tot'){
                    // do nothing

                } else {
                    var y = 'table#' + whichTable;
                    newPercVal = $(item).val() / $(y).find('#numcelltot').val();
                    newPercVal = newPercVal * 100;
                    newPercVal = newPercVal.toFixed(2) + '%';
                    ($(y + ' #percentcell' + itemId.substr(-1)).text(newPercVal));
                }

            });
        },

        mkOutTplJson: function(outCodes, context){
            var numOfCells; // Will be used later. Trust me, I'm a doctor.

            // First, pick out the total from the counter table in the current
            // specimen type context
            var outTplJson = {
                total: ($('table#' + context).find('#numcelltot').val()) * 1
            };


            /* Make a JSON with the key being the template keyword and the value
            * being the rounded, calculated percentage value. If the value of a given biological cell
            * is less than 1%, display `<1%` instead of 0.
            */
            _.each(_.keys(outCodes), function(item){
                numOfCells = $('table#' + context).find('#numcell' + item).val();

                if (numOfCells < 1) {
                    outTplJson[outCodes[item]] = '<1';
                } else {
                    outTplJson[outCodes[item]] = Math.round(numOfCells / outTplJson.total * 100);
                }
            });

            // Pass this JSON object back to the calling function.
            return(outTplJson);
        },
        tabbedOutput: function(){
            $('.tab-link').on('click', function(){
                $(this).addClass('current');
                var tab_id = $(this).attr('data-tab');
                $(this).siblings().removeClass('current');
                $("#" + tab_id).addClass('current')
                    .siblings().removeClass('current');

            })
        },
        watchCellNum: function(){
            /* This method is called when there is an 'input' state triggered. This is done
            * by default if the user uses the spinners to change the input value in any of the
            * number cells. An 'input' is triggered by code on the .datarow by code in the
            * addToCell method.*/
            var that = this;


            // TODO: if spinner, then increase numcelltot on both pb an bm
            // TODO: once that is done, fire off calc percent for both pb and bm
            $('.dataRow').on('input', function(event){

                var target = $(event.target);
                if (target.is('input')) {
                    target = target.closest('tr').find('#numcelltot');
                    target.val(target.val() * 1 + 1);
                    app.utils.totCellValue();

                } else {
                    target = target.find('#numcelltot');
                    target.val(target.val() * 1 + 1);
                    app.utils.totCellValue();
                }
                /* Increase numcelltot by one in both pb and bm
                 * */
                _.each(app.TPLJSON, function(item){

                    that.calcPercent(item.specimenType);
                });
            });
        },
        totCellValue: function(){
            var that = this;
            _.each(app.TPLJSON, function(item){
                var total = 0;
                var target = $('table#' + item.specimenType).find('.cellAmount');
                target.each(function(i, item){
                    total =+ $(item).val();
                });
            })
        }
    };
})(jQuery);
