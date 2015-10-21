#jQuery Notes from Free Code Camp
  1. Start out by defining your script element at the top of your HTML file: `<script></script>`
  2. Let's put something inside your script. How about a function that starts up as soon as you load the document?
  ```javascript
  <script>
    $(document).ready(function() {
    });
  </script>
  ```
    * The **document ready function** is a crucial element. The code you put inside the function `$(document).ready(function(){CODE GOES HERE});` will execute as soon as the browser loads your page. Without your document ready function, your code may run before your HTML is rendered, which would cause bugs.
    * All jQuery functions start with a **$**, a/k/a dollar sign or simply "bling"
  3. Specify an HTML Element. Let's give all objects of the button class an animated bounce:
  ```JavaScript
  <script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
  });
  </script>
  ```
    * jQuery functions often specify an HTML element using a *selector*. In the function `.addClass`, the selector is `button`.
    * The jQuery function `.addClass` allows you to add classes to HTML elements.
    * You are using jQuery to apply the Animate.css bounce class to your button elements.
    * The jQuery function therefore applies the class `animated bounce` (located in Animate.css) to all button elements.

  4. You can also apply jQuery selectors to created HTML *classes*. Let's apply an `.addClass` function to all `div` elements of the class `well`:
  ```JavaScript
  <script>
  $(document).ready(function() {
    $(".well").addClass("animated");
    $(".well").addClass("shake");
  });
  </script>
  ```

  5. Lastly, you can target an individual element with an ID:
  ```JavaScript
  <script>
  $(document).ready(function() {
    $("#elementID").addClass("animated fadeOut");
  });
  </script>
  ```

  6. Recap: Three ways to target an HTML element:
    * By type: $("button")
    * By class: $(".btn")
    * By ID: $("#ButtonID")
