<!doctype html>
<html>
<head>
   <meta charset="utf-8">
   <title>Manual Differential Counter</title>
   <link rel="stylesheet" type="text/css" href="styles/landing-style.css">
   <link rel="stylesheet" type="text/css" href="styles/counter.css">

</head>

<body>

<!-- Masthead of my pathology pages goes here. -->

<div class='header-cont'>
	<?php
		//putting in my header

		include_once __DIR__ . "/styles/masthead.html";

	?>

</div>

<div class='content-body'>
    <h1>Manual Differential Counter</h1>
<!-- The counter code starts here. -->
<div class = 'div-counter effect8'>
<form><table id='counter'>
   <th>
<?php
   $arCells =array(
       'A', 'S', 'D', 'F',
       'Z', 'X', 'C', 'V', 'B');
   $arCells2 = array ( // This is the setup I learned from SDH.
       'cellA' => 'blast',
       'cellS' => 'pro',
       'cellD' => 'meta',
       'cellF' => 'erythro',
       'cellZ' => 'baso',
       'cellX' => 'eos',
       'cellC' => 'plasma',
       'cellV' => 'lymph',
       'cellB' => 'mono',
       'celltot' => 'total'
   );

   foreach ($arCells2 as $key => $celltype) { ?>

       <td class='namecell' id='<?php echo $key ?>'></td>

       <?php } ?>
   </th>
   <tr>
   		<td class="datacell" id='row-label'>Number:</td> <!--this is to help user seee the row
        			is the raw number -->
   <?php foreach ($arCells2 as  $key => $celltype2) { ?>

       <td class='datacell'><input class='cellAmount' type='number'id='num<?php echo $key?>'></td>

   <?php } ?>
   </tr>
   <tr>
   		<td class='percentcell' id='row-label'>Percent (&#37;):</td>
   <?php foreach ($arCells2 as $key => $celltype2) { ?>

<td class='percentcell' ><span type='number' class='cellPercent' id='percent<?php echo $key?>'></span></td>

   <?php } ?>
   </tr>

   <tr>
   		<td class='namecell' id='row-label'>Key:</td>
		<?php foreach ($arCells as $aLetter) { ?>
   		<td class = "namecell"><?php echo $aLetter ?></td>
   		<?php } ?>
   </tr>
</table></form>


<div id = 'buttons'>
    <label for="specimenType">Specimen Type</label>
    <select id="specimenType">
        <option value="bm" selected="selected">Bone Marrow</option>
        <option value="pb">Peripheral Blood</option>
    </select>
    <button id='btnStartCount'>Start Count</button>
    <button id='btnCountDone'>Count Done</button>
</div>
</div> <!-- div-counter -->



<div class="output">

<!--This is where the actual tabs will live as an ul.-->
<!--Credit for this code belongs to a snipet I found on Codepen.-->
    <ul class="tabs">
        <li class="tab-link current" data-tab="tab-1">YSM Template</li>
        <li class="tab-link" data-tab="tab-2">PDX Template</li>
	    <li class="tab-link" data-tab="tab-3">MGH Template</li>
	    <li class="tab-link" data-tab="tab-4">Periph Blood</li>
    </ul>

    <div id='tab-1' class="tab-content current">
        <p class="instructions">Instructions:<p>
        <p>Click &ldquo;Start Count&rdquo; to get going.
        <p>Once count is done, click &ldquo;Count Done&rdquo; to write results.</p>
    </div>

    <div id='tab-2' class="tab-content">
        <span id='pdxOut'>
            <p class="instructions">Instructions:<p>
            <p>Click &ldquo;Start Count&rdquo; to get going.
            <p>Once count is done, click &ldquo;Count Done&rdquo; to write results.</p>
        </span>
    </div>

    <div id='tab-3' class="tab-content">
        <p class="instructions">Instructions:<p>
        <p>Click &ldquo;Start Count&rdquo; to get going.
        <p>Once count is done, click &ldquo;Count Done&rdquo; to write results.</p>
    </div>

    <div id='tab-4' class='tab-content' style="text-align:center">
        <span id='gpbOut'><h3>This feature is not yet active.</h3></span><br>
        <img id='inactive' src="images/puppies.jpg">
    </div>

</div><!-- output -->

</div><!--content body-->
<!--BLOCK: Handlebars template for the output field-->
<!--END BLOCK-->
<script src="/libraries/jquery-2.1.4.js"></script>
<script src="scripts/keypress.js"></script>
<script src="scripts/counter.js"></script>
<script src="scripts/app.js"></script>
<script src="scripts/routes.js"></script>
<script src="scripts/collections.js"></script>
<script src="scripts/models.js"></script>
<script src="scripts/views.js"></script>

</body>
</html>
