counter

# Description
This is a manual differential counter for use in hematopathology practices.

# Instructions
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

# Customization
Customization can be done via the `templates.json` file by adding the
morphologic cell type corresponding to each key. For now, the keyboard
keys are hard-coded as `A` through `G` and `Z` through `B` on a US English
QWERTY keyboard. Since this can obviously cause problems with QWERTZ and
Dvorak keyboards, customization will eventually be built in. Until then,
the JavaScript can be changed directly in the `counter.js` file to allow
a different keyboard layout.

# Dependencies
* jQuery version 1.11.2
* Keypress JS library. Much thanks to David Mauro (who ever you may be) for
creating this awesome library and for making it available under an Apache
License. Please see [Keypress](http://dmauro.github.io/Keypress/) on GitHub
for documentation and a demonstration of that library.
# counter
