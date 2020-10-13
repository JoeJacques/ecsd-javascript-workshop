# Try/Catch Objects and Prototypes

## Exercise 1

### a > Wrapping

Take a look at `./exercise-1.js`, there is a function `f1` which will result in an error being raised. Wrap a `try` and `catch` block around all the code you think is necessary to encapsulate. In the `catch` block, output the message of the error and/or the stack trace of the error.

### b > Wrap and Run

Create a function which takes another function as an argument and runs it in a try and catch block. It should output the message of any errors raised by the passed function. Pass your function the function `f2` and run it in node.

## Exercise 2 - Why finally?

What is the difference between writing code in a `finally` block and writing code after a `try catch` block? In the file `./exercise-2.js`, illustrate a difference between them with a demo which can be run.

## Exercise 3

### a > Reading Entry

Look at `./exercise-3.js`, on line 38, output the cost of a 'Sharp Soda' by reading from the `shop` object.

### b > Dynamic Reading

Within the function `isAvailable`, write the necessary code for it to take an integer argument and use it to return the availability of the respective item from the shop inventory.

### c > Adding Dynamic Entry

Create a function which takes three arguments (name, price and availability), using these arguments, the function creates a new product in the inventory of the `shop` object.

### d > Dynamic Reading +

Within the function `search`, write the necessary code for it to take a query string which should be used to output all the names of products in the shop inventory which contain the query string, irrelevant of case.

### e > List All

Create a function `listAvailableInventory`, which lists the name and price of each product in the inventory of the `shop` object which is **available**.

*Note: It may be worth commenting some of the previous outputs to make it easier to see when you have this one correct*

## Exercise 4 - Object Orientated Programming

So, in Exercise 3 we create functions which interact with the `shop` object. The issue here is that our functions will only work for this particular shop and aren't very flexible. Using `Prototypes`, we can build a blueprint which can be used to create any new shop we want with similar behaviours. Give it the functions from Exercise 3, except this time the functions should refer to `this` as opposed to a global `shop` variable. Write this `Prototype` in `./exercise-4.js`, a start has already been made to make it clear as to what to do.

## Exercise 5 - Polymorphism

Take a look at `./exercise-5.js`, make changes to the code so that the factory can take blueprints; the prototypes of the `Car`, `Ship` or `Plane`. Once it is passed, the factory can call a function called `buildBluePrint` which returns an instance of the passed blueprint.

*Note: If it doesn't make any sense, ask me or we can take a look at it together at the end*
