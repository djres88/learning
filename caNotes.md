#Notes from Code Academy's jQuery Course
##Intro: Conceptually...
Our basic jQuery example is made up of three files: index.html, stylesheet.css, and script.js. You should know by the file extensions what file types these are.

Have a look at the CSS file. Recall that when you reference (for example) **div** in CSS, you're referring to the HTML element **<div>**. So it is with jQuery in the .js file: **"div"** refers to the same HTML element **<div>**. *You can think of the element name passed to jQuery as identical to the CSS element, only wrapped in quotes.* So, for instance, you could target anything of class button with
```JavaScript
$('.button').someAction
```
Recall that .button in your CSS (stylesheet) file is how you'd target anything of class="button" in your HTML file. A summary:

**File Name**   | **Reference Syntax** | **HTML Element**
----------------|----------------------|------------------------
stylesheet.css  |    p, h1, #green     | <p>, <h1>, id = "green"
script.js       |  "p", "h1", "#green" | <p>, <h1>, id = "green"   

### What is jQuery?
jQuery is a library, or set of helpful add-ons, to the JavaScript programming language. jQuery provides a simple interface for the underlying JavaScript, which helps you manipulate html -- and build cool websites -- faster than you could otherwise.

##1. Linking Files
###a. HTML & CSS
as

###b. HTML & JavaScript Files
How does our JavaScript affect our HTML file? Why, with a link! We use a `script` tag to connect the two. The script tag goes in the head of the HTML file, below the title. If our script file is called "script.js", the code would look like this:
```JavaScript
<html>
    <head>
        <title></title>
        <!--Add your script tag here.-->
        <script type="text/javascript" src = "script.js"></script>
```

##2. Ready for jQuery?
Next, we'll need to start up our jQuery magic using the command `$(document).ready()`. Here's how it works:
  * $() says, "hey, jQuery things are about to happen!"
  * Putting document between the parentheses tells us that we're about to work our magic on the HTML document itself.
  * .ready(); is a function, or basic action, in jQuery. It says "hey, I'm going to do stuff as soon as the HTML document is ready!"
  * Whatever goes in .ready()'s parentheses is the jQuery event that occurs as soon as the HTML document is ready. So, `$(document).ready(something);` says: "when the HTML document is ready, do something!"

##3. Create a Ready Function
You can put functions inside ready. When the html object in $(object) is "ready", the functions are executed. Here's an example that affects the HTML object <div>: When the mouse hovers over the HTML object <div>, <div>'s opacity is maximized; when the mouse leaves, <div>'s' opacity is reset to 50%:
```javascript
$(document).ready(function() {
    $("div").mouseenter(function() {
        $("div").fadeTo("fast",1);
    });
    $("div").mouseleave(function() {
        $("div").fadeTo("fast",0.5);
    });
});```
