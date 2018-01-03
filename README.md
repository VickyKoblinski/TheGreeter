# TheGreeter
A simple jQuery-inspired JavaScript mini-framework for greetings.

## Usage
Example:
```js
var g = G('Vicky', 'Koblinski');
g.setLang('en').greet();
g.log();
g.setLang('jp');
g.log();
```
Also refer to `example` directory.

## Features

* Exposes a single object - TheGreeter, alias G - to the global scope.
* Encapsulates data using lexical closures
* Supports chaining
* Creates new TheGreeter objects without needing the `new` operator
* "Multi-language support" with the ability to change the language of an object on the fly
* Discrete memory usage by tying functions directly to TheGreeter object and accessing them through the prototype chain

## Purpose
jQuery and other open source JavaScript projects follow a similar design patterns at their core. These libraries and frameworks are incredibly powerful and well created due to the massive contributions of thousands of people, over - in jQuery's case - 10+ years of development. There's a lot to learn from looking at these projects and seeing how they work under the hood. Especially when coming from an education in class-based object-oriented languages, JavaScript's prototype-based programming can be surprising and odd. My intention with this project was to understand and emulate some of the powerful patterns that I see at the core of these famous JavaScript libraries. 
