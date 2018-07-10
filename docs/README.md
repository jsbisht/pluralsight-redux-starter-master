# Index

* Types of React Components
   * Stateless Functional Components Benefits
   * When to Use Class Components
   * When to use Stateless Components
* Container vs Presentation Components

## Types of React Components

* ES5 Class Components
* ES5 Stateless Components
* ES6 Class Components
* ES6 Stateless Components

### Stateless Functional Components Benefits

https://app.pluralsight.com/player?course=react-redux-react-router-es6&author=cory-house&name=react-redux-react-router-es6-m3&clip=5&mode=live

* No class needed
* Avoid `this` keyword
* Enforced best practices
* High signal-to-noise ratio
* Enhanced code completion
* Bloated components
* Easy to understand
* Easy to test
* Performance

### When to Use Class Components
* When you need to maintain state
* Require reference to the DOM
* Require lifecylcle methods
* If you need to create Child (nested) functions. Because every render with stateless function would create new instance of child function.

### When to use Stateless Components
Everywhere possible.

## Container vs Presentation Components

### Container components
Aka Smart or Stateful or Controller View component.

* Have little to no markup.
* Passes data and actions down to the presentation components.
* Knows about Redux

### Presentation components
Aka Dumb or Stateless or View component.

* Are nearly all markup.
* They shouldnt have any logic inside.
* Receive data and actions via props.
* Doesnt know about Redux

# References
https://medium.freecodecamp.org/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8