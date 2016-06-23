* Think of stacks/queues as modular tools
  - Typically stored in libraries
  - (So that they can be used by more complex/unique algorithms)

* Stack API
  `#push(item)` - pushes an item onto the stack
  `#pop` - removes most recently added item
  `#peek`
  `#size`

* Linked List Implementation
  - Upside: Every operation takes constant time *in the worst case*
  - Downside: Added time and space to deal with the links, so slightly slower

* Array Implementation — auto resizing
  - Upside: Less wasted space
  - First idea: Grow/shrink array every time you push/pop. But that's too expensive; must resize every time you insert
  - Better idea: Resize only occasionally: "Repeated Doubling"
    * Every time you insert and need more space, double the size of the array
    * So every operation takes constant *amortized time*

* Many libraries will offer both APIs, let client choose whether they want Linked List or Array
  - If you want the guarantee that every operation will be fast, you'll want the **Linked List** (e.g. packets coming through for internet switch, planes landing for control tower)
  - If you don't care about individual ops (if you only care about total time), then **Array** is probably better
