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

##2. The State Tree Is *Redundant*
* You do not modify state directly; you dispatch an action
* An action is a POJO describing the change
  - It's minimal representation of the change in state
  - Structure of action object is up to you; only requirement is that it has a "type" property that is not undefined
```javascript
[object Object] {
  type: "ADD_BUTTON"
}
```
* Which actions you have depend on how users can change your app
* Components don't know how the change happens; they only need to dispatch an action
* *Whether it's by user interaction or a network request, any data that enters a redux application, enters via actions*

##3. Pure vs Impure Functions
* PURE
```javascript
// Pure Functions
function square(x) {
  return x * x
}
```
- Depend solely on the arguments passed to them
- Do not modify their argument(s)
- Have predictable output given input every time

* IMPURE
```javascript
// Impure functions
function square(x) {
  updateXInPG(x);
  return x * x;
}

function squareAll(items) {
  for (let i = 0; i < items.length; i++) {
    items[i] = square(items[i]);
  }
}
```
- May call the DB or the network
- May have side effects
- May operate on the DOM
- May manipulate the arguments passed to them

* Why it matters: some of the functions you write redux must be pure
