#LESSON 14: LOCALS & CONDITIONAL TEMPLATES
- In most websites, there's some info you want to pass along to all the templates
- With express, we can use the *locals* object to pass along information that we want any of our templates to be able to access
- We'll also learn how to test for variables that may/may not be passed to your templates. (That way, we can build templates that have conditional content.)

##1. Pass Information to All Pages
To pass along information to any of the templates, use the `app.locals` command at the top of your package.json main file (exercise14.js, in this case). Once called, the locals method can be applied to any object or variable that you want to pass. Let's pass along pagetitle:
`app.locals.pagetitle = "Awesome Website"`

This will be added locally to ALL the pages.

##2. Add the Variable to default.ejs
```html
<h1><%= pagetitle %><%= title %></h1>
```

#How to deal with errors (users example)
1. In your default.ejs file, write an if statement!
