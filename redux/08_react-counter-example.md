```javascript
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// Counter component as a simple function (supported since React 14). That's as opposed to React.createClass etc.
var Counter = ({
  // These are props...
  value,
  onIncrement,
  onDecrement
}) => (
  // Render...
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}+</button>
    <button onClick={onDecrement}-</button>
  </div>
);

// NOTE: Is this how you would do ^^ in ES5? ASK SCOTT
// var Counter = function(obj) {
//   return (
//     <div>
//       <h1>{obj.value}</h1>
//       <button onClick={obj.onIncrement}+</button>
//       <button onClick={obj.onDecrement}-</button>
//     </div>
//   );
// };

import { createStore } from 'redux';
const store = createStore(reducer)

const render = () => {
  ReactDOM.render(
    // Render function is called any time the store state changes, so you can safely pass current state of the store as a prop to your counter component.
    <Counter
      // Passed as props to the counter component...
      value={store.getState()}
      onIncrement={() =>
        store.dispatch({
          type: 'INCREMENT'
        })
      }
      onDecrement={() =>
        store.dispatch({
          type: 'DECREMENT'
        })
      }
    />,
    document.getElementById('root')
  );
};

// We subscribe to the redux store so that the render function runs ANY TIME state changes
store.subscribe(render);
render();
