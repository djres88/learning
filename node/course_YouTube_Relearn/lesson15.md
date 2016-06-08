#LESSON 15: MODULARIZING ROUTES
1. Create a routes folder
2. In your main .js file (exercise15.js), require your routes folder and assign it a variable:
```javascript
var routes = require('./routes');
```
3. Transfer routes from the main .js file (exercise15.js) to the routes directory.
  * Create an index file in routes called `index.js`
  * Copy/paste your routes from the main .js file into index.js
  * *Change* the `app.get` method to a variable definition. The variable is assigned to a function that creates each page's attributes:
    * Before:
    ```javascript
    app.get('/about', function(req, res) {
      res.render('default', {
        title: 'About Us',
        classname: 'about'
      });
    })
    ```
    * After:
    ```javascript
    exports.about = function(req, res) {
      res.render('default', {
        title: 'About Us',
        classname: 'about'
      });
    })
    ```

4. Replace routes with references to the routes folder
  * In the main file (exercise15.js), replace the removed `app.get` route creators with calls to the appropriate variables in our routes folder:
  ```javascript
  app.get('/', routes.index);
  app.get('/about', routes.about);
  ```
