#Principles

##1. A Single Immutable State Tree
* In redux, the entire state of your app is contained in a single JS object
* An example of current state for a todo list app:
```javascript
myApp = {
  todos: [{
    id: 1,
    text: "Pick up dry cleaning",
    completed: true
  }, {
    id: 2,
    text: "Buy groceries",
    completed: false
  }
  ],
  filter: "SHOW_INCOMPLETE"
}
```
  - The state changes as the user interacts with the application
  - For example, changing the filter to "SHOW_ALL"
* As changes take place, the data and the UI is maintained *in a single object* like the one above.

##2.
