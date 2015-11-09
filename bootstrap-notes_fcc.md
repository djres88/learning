#Notes from Free Code Camp Course #3: Bootstrap
- Bootstrap adapts your website to any screen size
- You can add bootstrap to any app by linking to it at the top of your html (much as you would jQuery for js): <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>
- Bootstrap comes with pre-made classes that you can add to elements on your page.

Once you load bootstrap, you can use its handy classes to make your elements responsive.

##A. BUTTONS
  * **Buttons:** Add class `.btn` to a button element
    - `<button class="btn">Like</button>`
  * **Block-level Buttons:** Normally, your button elements are only as wide as the text they contain. But you can add a *block-level* button using the `.btn-block` class like so:
      `<button class="btn btn-block">Like</button>`
      ^Note that you still want to keep the `.btn` class
    - Illustration: http://i.imgur.com/O32cDWE.png

###**TERM:** BLOCK LEVEL vs. INLINE ELEMENTS
*Block-level* elements stretch to fill a page's horizontal space; any elements following will flow onto a "new line" below the "block." By contrast, an *inline* element occupies only the space bounded by the tags that define the inline element.

Examples of block elements include `<div>`, `<h1>` - `<h6>`, `<p>`, and `<form>`.

Inline elements include `<span>`, `<a>`, and `<img>`. Note that in the example above, we changed `<button>` — normally an inline tag — into a block-level element.

For more info on blocks vs. inline, see http://www.w3schools.com/html/html_blocks.asp.

BUTTON TOOLS (cont'd)
  * **Button Color**: The `btn-primary` class is the main color you'll use in your app. It is useful for highlighting actions you want your user to take.
  Example: `<button class="btn btn-block btn-primary">Like</button>`

  * **Button Optional Actions:** The `btn-info` class is used to call attention to optional actions that the user can take.
  `<button class="btn btn-block btn-info">Like</button>`

  * **Warn Users:** Use class `btn-danger`

##B. POSITION ELEMENTS USING BOOTSTRAP'S GRID
Bootstrap arranges elements according to a grid of rows and colums. It looks like this:
http://i.imgur.com/FaYuui8.png
Here, "md" refers to medium -- sizes such as laptops. The numbers specify how wide the frame should be. For smaller screens such as mobile, "md" would be replaced by "xs."

The majority of bootsrap's grid classes can be applied to html elements using div. For example, you could position button elements side by side like so:
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


  * **Fit images:** Add the class `.img-responsive`
  * **Center text:** Add the class `.text-center`
    - Recall you can add several classes to an element by separating them with a space: `<h2 class = "green-text text-center">`
