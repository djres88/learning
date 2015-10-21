#Notes from Code Academy's jQuery Course
##Intro: Conceptually...
Our basic jQuery example is made up of three files: index.html, stylesheet.css, and script.js. You should know by the file extensions what file types these are.

Have a look at the CSS file. Recall that when you reference (for example) **div** in CSS, you're referring to the HTML element **<div>**. So it is with jQuery in the .js file: **"div"** refers to the same HTML element **<div>**. *You can think of the element name passed to jQuery as identical to the CSS element, only wrapped in quotes.* So, for instance, you could target anything of class button with
```JavaScript
$('.button').someAction
```
Recall that .button in your CSS (stylesheet) file is how you'd target anything of class="button" in your HTML file. A summary:

**File**        | **Reference Syntax** | **HTML Element**
----------------|----------------------|------------------------
stylesheet.css  |    p, h1, #green     | <p>, <h1>, id = "green"
script.js       |  "p", "h1", "#green" | <p>, <h1>, id = "green"   
