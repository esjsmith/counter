# counter

## Description
This is a manual differential counter for use in hematopathology practices.

## Instructions
The app is relatively simple to use.

1.  Load up the app by navigating to the `index.html`.
2.  Then, choose whether the count represents a peripheral blood specimen
    or a bone marrow aspirate; this choice will load a slightly different
    set of tags above the individual squares in the counter display.
3.  Start counting. The keyboard keys corresponding to the cell type is
    displayed at the bottom of each column. The cell type this corresponds to
    is at the top of each column.
4.  Percentages are calculated in real time, as there is two-way data
    binding between the input boxes and the output percentage boxes.

## Customization
Customization can be done via the `comboTpl.json` file in the `settings` folder. 
The parts of this JSON file are:

1. `tplCode`: _Template Code_. An easy to type code that will be used to refer to the template in
    the app code.
2. `tplName`: _Template Name_. A descriptive (but not too long) name for the template that is rendered
    into the tabbed output view.
3. `specType`: _Specimen Type_. By default, this contains only `pb` (peripheral blood) 
    and `bm` (bone marrow).  Certainly, other specimen types can be made. However, the drop down
    menu currently only knows these two types. The goal is to eventually build a drop down
    menu that will render from the `specType`. 
4. `outSentence`: Output sentence using a Handlebars-type format. The tags in the
    double-stashes (`{{example}}`) should match exactly the codes in the next section of the 
    tplJSON.
5. `outCodes`: _Output Codes_. This contains JSON objects. In each `{"key": "value"}`, the key represents
    the one letter keyboard key. The "value" represents the abbreviation biological cell type.
    This abbreviation must match the cell code abbreviation that was written into the Handlebars
    template in number 2 (`outSentence`). Sorry to use the word key to represent both the keyboard
    key and the object key. If you can think of a clearer way to word this, then please
    let me know.

## Dependencies
* jQuery version 1.11.2
* Backbone JS v1.2.0
* Underscore JS v1.8.3
* Handlebars JS v3.0.3
