#HTML Snippets for Atom
##Add-ons for `class` and `id`

To add html snippets for ids and classes:
  1. Open Atom
  2. Go to Atom's main menu and **click "Open Your Snippets"**. This should open your "snippets.cson" file.
  3. Copy the code below to the end of your **snippets.cson** file.
    - (NOTE: If your snippets.cson file already contains an `.text.html` key, do not copy the first line of the code below. Instead, locate the `.text.html` key in your snippets.cson file, then go to the code below and copy all lines EXCEPT .text.html. Paste this to your snippets.cson file immediately below your .text.html key.)
  4. You will now be able to do the following in HTML files:
    * **p. + tab**: snippet automatically adds a class to element p
      - Supported element types include: `p.`, `div.`, `h1.-h6.`, `input.`, `image.`
    * **p# + tab** snippet automatically adds an ID to element p
      - Supported element types include: `p#`, `div#`, `h1#-h6#`, `input#`, `image#`
  5. Test it out! Open an HTML file and try `p.` + tab to test class. Try `p#` + tab to test id.


###Copy this code!
```
'.text.html':
  'div ID':
    'prefix': 'div#'
    'body': '<div id="$1"> </div>'

  'p ID':
    'prefix': 'p#'
    'body': '<p id="$1"> </p>'

  'h1 ID':
    'prefix': 'h1#'
    'body': '<h1 id="$1"> </h1>'

  'h2 ID':
    'prefix': 'h2#'
    'body': '<h2 id="$1"> </h2>'

  'h3 ID':
    'prefix': 'h3#'
    'body': '<h3 id="$1"> </h3>'

  'h4 ID':
    'prefix': 'h4#'
    'body': '<h4 id="$1"> </h4>'

  'h4 ID':
    'prefix': 'h4#'
    'body': '<h4 id="$1"> </h4>'

  'h5 ID':
    'prefix': 'h5#'
    'body': '<h5 id="$1"> </h5>'

  'h6 ID':
    'prefix': 'h6#'
    'body': '<h6 id="$1"> </h6>'

  'input ID':
    'prefix': 'input#'
    'body': '<input id="$1" type="${2:button}" name="${3:name}" value="$4">$0'

  'Image ID':
    'prefix': 'img#'
    'body': '<img id="$1" src="$2" alt="$3">$0'


  'div class':
    'prefix': 'div.'
    'body': '<div class="$1"> </div>'

  'p class':
    'prefix': 'p.'
    'body': '<p class="$1"> </p>'

  'h1 class':
    'prefix': 'h1.'
    'body': '<h1 class="$1"> </h1>'

  'h2 class':
    'prefix': 'h2.'
    'body': '<h2 class="$1"> </h2>'

  'h3 class':
    'prefix': 'h3.'
    'body': '<h3 class="$1"> </h3>'

  'h4 class':
    'prefix': 'h4.'
    'body': '<h4 class="$1"> </h4>'

  'h5 class':
    'prefix': 'h5.'
    'body': '<h5 class="$1"> </h5>'

  'h6 class':
    'prefix': 'h6.'
    'body': '<h6 class="$1"> </h6>'

  'input class':
    'prefix': 'input.'
    'body': '<input class="$1" type="${2:button}" name="${3:name}" value="$4">$0'

  'Image class':
    'prefix': 'img.'
    'body': '<img class="$1" src="$2" alt="$3">$0'
```
