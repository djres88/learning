#Notes from Free Code Camp Course #3: Bootstrap
- Bootstrap adapts your website to any screen size
- You can add bootstrap to any app by linking to it at the top of your html (much as you would jQuery for js): <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>
- Bootstrap comes with pre-made classes that you can add to elements on your page.
- Nest your html body in a div class called **`<div class="container-fluid">`.**

Once you load bootstrap, you can use its handy classes to make your elements responsive.

##A. BUTTONS
  * **Buttons:** Add class `.btn` to a button element
  `<button class="btn">Like</button>`

  * **Button Color**: The `btn-primary` class is the main color you'll use in your app. It is useful for highlighting actions you want your user to take.
  `<button class="btn btn-block btn-primary">Like</button>`

  * **Button Optional Actions:** The `btn-info` class is used to call attention to optional actions that the user can take.
  `<button class="btn btn-block btn-info">Like</button>`

  * **Warn Users:** Use class `btn-danger`

  * **Block-level Buttons:** Normally, your button elements are only as wide as the text they contain. But you can add a *block-level* button using the `.btn-block` class like so:
      `<button class="btn btn-block">Like</button>`
  ^Note that you still want to keep the `.btn` class

##B. BLOCK LEVEL vs. INLINE ELEMENTS
http://i.imgur.com/O32cDWE.png
*Block-level* elements stretch to fill a page's horizontal space; any elements following will flow onto a "new line" below the "block." By contrast, an *inline* element occupies only the space bounded by the tags that define the inline element.

Examples of block elements include `<div>`, `<h1>` - `<h6>`, `<p>`, and `<form>`. Inline elements include `<span>`, `<a>`, and `<img>`. Note that in the example above, we changed `<button>` — normally an inline tag — into a block-level element.

###i. `<span>` for Inline Elements
By using the span element, you can put several elements together, and even style different parts of the same element differently.
```html
<p>You're entering the <span class="text-danger">danger zone!</span></p>
```

For more info on blocks vs. inline, see http://www.w3schools.com/html/html_blocks.asp.

##C. POSITION ELEMENTS USING BOOTSTRAP'S GRID
Bootstrap arranges elements according to a grid of rows and columns. It looks like this:
http://i.imgur.com/FaYuui8.png
Here, "md" refers to medium -- sizes such as laptops. The numbers specify how wide the frame should be. For smaller screens such as mobile, "md" would be replaced by "xs."

The majority of bootsrap's grid classes can be applied to html elements using div. The entire body to which you'd like to apply bootstrap should be placed within `<div class="container-fluid">`.

From there, you could position button elements side by side (on a single row) like so:
```html
<div class="row">
  <div class="col-xs-4">
    <button class="btn btn-block btn-primary">Like</button>
  </div>
  <div class="col-xs-4">
    <button class="btn btn-block btn-info">Info</button>
  </div>
  <div class="col-xs-4">
    <button class="btn btn-block btn-danger">Delete</button>
  </div>
 </div>
```

###i. Custom Headings
Recall bootstrap's grid arrangement. When we apply a class `col-xs-4`, **xs** means extra small ("md" would mean medium, as in the graphic above) and **4** specifies how many columns wide the element should be.

The following code would put an image right next to our header:
```html
<div class="container-fluid">
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
      <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat"></a>
    </div>
  </div>
</div>
```

###ii. Custom Form Elements
You can use Bootstrap's col-xs-* classes on form elements. For example, you can ensure that your radio buttons will be evenly spread out across the page, regardless of screen width.

Just nest all elements within a <div class="row"> element, then give each of the elements a column class:
```html
<div class="row">
  <div class="column-xs-6">
    <input type="checkbox" name="position"> QB<br>
  </div>
  <div class="column-xs-6">
    <input type="checkbox" name="position"> RB<br>
  </div>
</div>
```

##D. Add Font Awesome Icons
Uses the `<i>` class. Add a thumbs up to a button:
```html
<button class="btn btn-block btn-primary">Like <i class="fa fa-thumbs-up"></i></button>
```
The syntax is always the same: `class="fa fa-[icon name]"`. A complete list of font awesome icons can be found here: https://fortawesome.github.io/Font-Awesome/icons/. Before using, first make sure that you install (using npm) the font-awesome packages on your project folder's packages.json file.

  * **Fit images:** Add the class `.img-responsive`
  * **Center text:** Add the class `.text-center`
    - Recall you can add several classes to an element by separating them with a space: `<h2 class = "green-text text-center">`

##E. Exercise from Scratch
```javascript
<!--Only change code above this line-->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```
