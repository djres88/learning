#The Redux Store (vid 6-7)

* Store binds together the three principles of redux
  1. Holds the current state-object of the application
  2. Lets you dispatch actions
  3. When you create store, you specify the reducer (which in turn tells *how* state is updated with actions)
* Example:
```javascript
// Reducer Function
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT'):
      return state + 1;
    case 'DECREMENT')
      return state - 1;
    default:
      return state;
    }
}
// LOAD IN STORE
const { createStore } = Redux; /*ES6*/
// var createStore = Redux.createStore; (ES5 Way)
// import { createStore } from 'redux' (NPM/Babel Way)

// Tell the store what reducer to use
const store = createStore(reducer);
```
* Three important functions in store: `getState()`, `dispatch()`, `subscribe()`

* `store.dispatch` example (most common)
```javascript
store.dispatch({ type: 'INCREMENT' })
```
  - Lets you dispatch actions that change the state of your application
  - If you log the store state (getState) after the dispatch, you'll see the change in the state
* `store.subscribe()`
  - Lets you register a callback that the redux store will call *any time* that an action has been dispatched
  ```javascript
  store.subscribe(() => {
    document.body.innerText = store.getState();
  });
  // You can imagine a react component, but let's start simple:
  document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
  })
  ```
- Think of "subscribe" as an array of listeners

#The Store under the hood
```javascript
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    // listeners gets called every time an action is dispatched...
    listeners.forEach(listener => listener());
  }

  const subscribe = (listener) => {
    listeners.push(listener)
    // To unsubscribe... maintain a reference to the listener?
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  }

  dispatch({});

  return { getState, dispatch, subscribe }
}
