Let's break down ES6's `Object.assign`.

In redux, it's a great way to copy/update state — i.e. *without* mutating the state object.

`Object.assign` takes 3 arguments:
  1. The new object (to be returned)
  2. The old object (to be copied)
  3. Any changes to properties (overrides values in new obj)

Here's an example of how you might archive a fieldState for one of our client's fields:
```javascript
const archiveFieldState = (field) => {
  return Object.assign(
    {}, //new object
    field, //copied object
    { status: 2 } //new values
}
```
