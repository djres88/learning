#LESSON 13: ADDING PARTIALS
- Templates are great, but lots of times there will be content you'll want on every page (header and footer, navigation, etc.)
- For those uses, it's better to set up a sub-template folder called *partials*

##1. Create a Template with Bootstrap
Copy the Default Bootstrap Template from their website and paste it into new .ejs file. We'll call the file ~default-bootstrap~ (see updated README for instructions) and save it in the views folder.

##2. Load the jQuery and Bootstrap files from CDNs.
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
```
Add any other code you want to the .ejs file.

##3. Link with `course.js`
In the course.js file, pass `default-bootstrap` as an argument to `app.get('/', function('default-bootstrap', {...}))`

##4. Create Partials Folder: Templates Directory
* Within the views folder, create a partials folder
* Within the partials folder, create a page folder
* Within the page folder, you can create templates for individual pages.

Here, for example, we're cut/pasting the "head" content from the default-bootstrap.ejs file into a separate file called head.ejs:

* In the default-bootstrap.ejs file, cut all material from *inside* the head tag and place it in the head.ejs file. Save head.ejs.
* Go back to the default-bootstrap.ejs file. Inside the head tag, reference the new file using the `include` command:
  ```html
  <head><% include partials/page/head.ejs %></head>
  ```

The above works much in the same way as partitioning a single html file into its .js and .css file components! Cool, right? Let's create more partials.

##5. MORE Partials
Here are some common partials Ray uses:
* **header.ejs**: header formats
* **footer.ejs**: footer formats
* **jsdefaults.ejs**: script tags (bootstrap, jQuery, etc.)

##6. Add classnames
In the course.js file, you can add a classname element to the objects passed to render. That way, you can target certain page classes using css.

Add the classname as a variable in your default-bootstrap.ejs file. For example, you could set your title tags this way: `<title><%= 'classname' %></title>`. This will render all the page titles according to the class element of the page object.

##7. Potential Issues: Does the Variable Exist?
You'll note that because `users` does not exist in *about*, the page shows an error when you try to call that list. You could avoid this with an if statement, but there's probably a better way to go about this.
