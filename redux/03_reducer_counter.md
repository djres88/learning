Here's what the reducer might look like for our counter:
```javascript
// Note that if state is undefined, it should return the initial state of the application
function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0;
  }
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
}
```
We can improve the code w/ a case-when and a default value:
```javascript
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT'):
      return state + 1;
    case 'DECREMENT')
      return state - 1;
    default:
      return state;
}
```
