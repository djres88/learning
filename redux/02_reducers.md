##4. The Reducer Function Describes State Mutations
* Background/reasoning: The UI/View Layer is most predictable when described as a *pure function of the application's state*
  - Now what does that mean?
  - I think it means something like this: if I pass a (mystery function) two args — (1) the old state and (2) an action - then I can predictably return the new state
* Ha... this is exactly what redux does
  - There's a function that takes old state + dispatched action and returns new state. In pseudocode:
  `function reducer(old_state, action) => new state`
  - The *reducer* takes old state and dispatched action and returns the new state object
    * The reducer function *cannot* modify the state-object passed to it; the reducer function *must* be pure
  - Even in large applications, there's still just a single reducer function that calculates new state based on old state and a dispatched action
* TL;DR - The reducer calculates `state` of the application given `old_state` and `action_dispatched`
