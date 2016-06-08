#LESSON 12 - "TEMPLATING"
- Using send is not the best way to create websites
- Express allows you to use templating engines:
  * Jade (default) -- similar to css
  * EJS (embeddable javascript)

##1. Install EJS
To install EJS, cd in your terminal to your project folder (we'll just install this in the youtube course folder)
  * Make sure you've already created a package.json file using the helper. See LESSON 7.
  * Now run `npm install ejs --save`

##2. Add EJS to Your Node Application (my example: `course.js`)
* Below the variable declarations, type the command `app.set('view engine', 'ejs')`
  - This allows you to set up variables for express

##3. Create a Template
* By default, templates should be placed in a views directory.
* Create a folder called "views"
* Within views, create an ejs file called `default.ejs`

##4. Add Code to `default.ejs`
* Use a simple HTML template from JSBin: https://jsbin.com/feveqilafi/edit?html,output
* Retitle the title tag, add <h1> and <p> tags — whatever you want

------

Now, whenever we have a route that we want to display this template with, we can call it (the route or the template?) using the *render* method.

##5. Edit the `course.js` Root Command
* The root command `app.get('/'...` is using a *send* method.
* We want to change that to a *render* method and call our `default` template as an argument: `res.render('default')`
 - NOTE: you don't need to specify the views folder b/c the render method looks there by default. Nor do you need to specify the .ejs extension


---------
Technically, it's not a template yet because there's not any data going to it. You can pass along information to your template by sending an extra object with your render method.

##6. Pass an Object to Render
In the `app.js` file:
```javascript
app.get('/', function(req, res) {
  res.render('default', {title: 'Home'})
});
```

In the `default.ejs` file, ejs bounds variables using the code `<%= [variableName] %>` -- much in the same way jQuery uses the syntax `$('variableName')`:
```HTML
<h1><%= title %></h1>
```

If you want to add javascript to ejs, you just skip the initial `=`: so `<% var x = "variable" %>`

##7. Add JavaScript to EJS
In the `default.ejs` file:

```JavaScript
<ul>
<% for(var i=0; i<users.length; i++) {%>
  <li><%= users[i] %></li>// use the equals sign because you just want to output a variable.
<% } %>
</ul>
```

In `app.js`, add a second element to your object like so:
```javascript
app.get('/', function(req, res) {
  res.render('default', {
    title: 'Home',
    users: ['David', 'OJ', 'The Barrister', 'ChiChi', 'Sara McDuff', 'Cap Rafferty', 'Holly Saint Doon', 'Marco Vicarious']
  });
});
```
