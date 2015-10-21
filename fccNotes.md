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

  6. Recap: **Three ways to target an HTML element**:
    * By type: $("button")
    * By class: $(".btn")
    * By ID: $("#ButtonID")

  7. In addition to adding classes to HTML elements with `.addClass()`, you can also **remove classes from elements** using `.removeClass()`:
  ```javascript
  $("button").removeClass("btn-default");
  });
  ```
  That code removes the `btn-default` class from all `button` elements. NOTE: Once again, all this takes place inside the `$(document).ready(function() {...`

  8. Finally, you can **change classes for elements** using `.css()`. The syntax is slightly different from regular CSS, though. If you wanted to change a target's color to *blue*, for example, you would write
  ```JavaScript
  $("#targetID").css("color","blue")
  ```
  Note that `"color"` and `"blue"` are separated by comma rather than by colon.

  9. **Change non-CSS properties of elements** using `.prop()`. If you wanted to disable a button, for example, you could write:
  ```JavaScript
  $("#button1").prop("disabled",true);
  ```

  10. **Remove HTML Elements** using `.remove()`. Let's remove an element called #greenButton:
  ```JavaScript
  $("#greeButton").remove()
  ```

  11. **Move Elements** using `.appendTo`. For example, let's say we have an element `buttonL1` that's currently nested under ID `#right-column`. The HTML looks like this:
  ```JavaScript
  <div class = "columns" id = "right-column">
    <button class = "btn" id = buttonR1>#buttonR1</button>
    <button class = "btn" id = buttonR2>#buttonR2</button>
    <button class = "btn" id = buttonL1>#buttonL1</button>
  </div>
  ```
  Now let's say we'd like to move our `buttonL1` button from `#right-column` to another column called `#left-column`. Here's how:
  ```JavaScript
  <script>
    $(document).ready(function() {
      $("#buttonL1").appendTo("#left-column");
    });
  </script>
  ```

  12. **Copy Elements** using `.clone` *and* `.append`. Using the same example as above, if we wanted to copy the element `#buttonR2` over to the `#left-column`, we would write:
  ```JavaScript
  <script>
    $(document).ready(function() {
      $("#buttonR2").clone().appendTo("#left-column");
    });
  </script>
  ```
  Did you notice how we combined two functions, `clone` and `append`? This is called **function chaining**.

  13. **Target Parents** using `.parent()`. Every element in HTML has a parent element from which it inherits properties. Have a look at
  ```JavaScript
  <div class = "parent-class">
    <H1> This is the parent of the target. </H1>
    <div class = "our-target" id ="target1">
    <H2> This is the target. <H2>
  </div>
  //Think I need to clarify this, actually. It's only a parent if the target element is nested within the tags, correct? In this example, the parent of "#target1" is just the "parent-class", right?
  ```
  Here's an example of how you would use the parent() function if you wanted to give the parent element of the left-well element a background color of blue:
  ```JavaScript
  $("#left-well").parent().css("background-color", "blue")
  ```

  14. **Target Children of Elements** using `.children`. Let's use this function to give children of the left-well element a yellow background:
  ```JavaScript
  $("left-well").children().css("background-color","yellow")
  ```

  15. **Target a Specific Child of an Element** using `[target-name]:nth-child(n).` Note that you must reference the *parent* of the element you wish to target.

  Look at the buttons example from `#11`. What if we wanted to make the *second* button -- `buttonR2` -- have bounce effect? We know how to do that using target IDs, but suppose our button IDs/titles were always changing (like on an e-commerce site, for example)? Luckily, we can index the nth button using the `target:nth-child(n)` code like so:
  ```JavaScript
  $(".columns:nth-child(2)").addClass("animated bounce");
  //^ See the example in #11. Clarify: Do I use the class `columns` or `btn` to reference the second button? I assume it's columns, since all the buttons are children of the class `column`.
  ```

  16. **Target Even (or Odd) Elements** using `[target-name]:odd` or `[target-name]:even`. If we want to give the first and third buttons the class `animated shake`, we would write:
  ```JavaScript
  $(".btn:even").addClass("animated shake");
  ```
  Confused by why the code says "even" but we're affecting the first and third buttons? Remember that jQuery, like JavaScript, is zero-indexed. The "first" element is 0, so the "second" element is 1. That means the first element is even, the second element is odd, and so on.

  17. **Modify an Entire Page** by targeting the HTML `body` element. We can make a page do some weird stuff by coding:
  ```JavaScript
  $("body").addClass("animated").addClass("hinge")
  ```

**IDEA!** Create all these as a table/quiz. In the first column is the function name; in the second, a description of the action; third, an example in syntax (e.g. `$("#redButton").css("color","darkRed")`); fourth, a link to a visual of the function in action (e.g., a red button disappears.)
