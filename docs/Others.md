HTML5
* push state is used by modern browsers to give urls that are without hash.
* Server Sent Events are used by webpack

ReactJs
* ES6 class component doesnt bind `this` automatically to current class object. Instead we need to manually `bind` it.
* for performance reasons avoid defining bind in the `render()` function. This is because it would create a new instance of this function each time a re-render happens.
* Checkout `react-slingshot` for configuring redux middleware.
