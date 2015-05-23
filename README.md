# counter

## Description
This is a manual differential counter for use in hematopathology practices.

## Instructions
The app is relatively simple to use.

1.  Load up the app by navigating to the `index.php`.
2.  Then, choose whether the count represents a peripheral blood specimen
    or a bone marrow aspirate; this choice will load a slightly different
    set of tags above the individual squares in the counter display.
3.  Start counting. The keyboard keys corresponding to the cell type is
    displayed at the bottom of each column. The cell type this corresponds to
    is at the tope of each column.
4.  Percentages are calculated in real time, as there is two-way data
    binding between the input boxes and the output percentage boxes.

## Customization
Customization can be done via the `comboTpl.json` file in the `settings` folder. 
The parts of this JSON file are:
1. `tplCode`: An easy to type code that will be used to refer to the template in
the app code.
2. `tplName`: A descriptive (but not too long) name for the template that is rendered
into the tabbed output view.
3. `specType`: For now, this only takes either `bm` ("bone marrow") or `pb` ("peripheral blood").
Using anything else will cause the template not to be rendered.
4. `outSentence`: Output sentence using a Handlebars-type format. The tags in the
double-stashes (`{{example}}`) should match exactly the codes in the next section of the 
tplJSON.
5. `outCodes`: This contains JSON objects. In each `{"key": "value"}`, the key represents
the one letter keyboard key. The "value" represents the abbreviation biological cell type.
 This abbreviation must match the cell code abbreviation that was written into the Handlebars
 template in number 2 (`outSentence`). Sorry to use the word key to represent both the keyboard
 key and the object key. If you can think of a clearer way to word this, then please
 let me know.

## Dependencies
* jQuery version 1.11.2
* Keypress JS library. Much thanks to David Mauro (who ever you may be) for
creating this awesome library and for making it available under an Apache
License. Please see [Keypress](http://dmauro.github.io/Keypress/) on GitHub
for documentation, source code, and a demonstration of that library.
