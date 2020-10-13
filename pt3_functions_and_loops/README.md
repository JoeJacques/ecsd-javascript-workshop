# Functions and Loops - Exercises

## Exercise 1

### a > forLoop

Look at `./exercise-1.js`, create a function `f1` which takes an array as an argument and increments each of its values by 1 permanently. For this particular exercise, use a `for` loop to complete the task.

Run the script to see that each value has been incremented in the array after the function has been called.

### b > While

Create a function `f2` which also takes an array as an argument but instead of incrementing the values, decrement the values within the array by 1 permanently. For this particular exercise, use a `while` loop to complete the task.

Uncomment the lines before part `c)`. Run the script to see that each value has been decremented in the array after the function has been called.

### c > forEach

Create a function `f3` which also takes an array as an argument but returns a newly populated array of doubled values of the original. For this particular exercise, use the `forEach` function.

Uncomment the lines before part `d)`. Run the script to see that each value has been doubled in the array returned.

### d > map

Create a function `f4` which also takes an array as an argument but instead halves the values and returns the newly modified array. For this particular exercise, use the `map` function of an array.

Uncomment remaining lines after your code. Run the script to see that each value has been halved in the array returned.

## Exercise 2 - Map Builder

### a > One argument

Look at `./exercise-2.js`, you need to create a function which takes an integer as an argument, with this integer a 2 dimensional map is created with a width and height of the passed integer. The co-ordinates should origin from 0,0 and increase from there. The value allocated to each position on the map should be a string format of its co-ordinates, such as `'0,0'`. This map is then returned from the function.

_Hint: Take a look into multi-dimensional arrays for clarity on the question, or ask me if it makes no sense at all_

Once finished, run the script to take a look at your created map.

### b > Two arguments

Let's copy that function and create a new one named `buildMap2(x, y)`, this one should two arguments. The first should determine the width of the map, the second should determine the height.

Once finished, uncomment the checkers and give the script a run!

### c > Pretty Output ~ Optional / Homework

This is more of an optional challenge, the goal is to write a function which takes a map built from your previous function; `buildMap2(x, y)` and prints it into the console in a pretty format.

So, for example; printing a map with width and height 2,2 would output to console as so;

```
$ node exercise-2.js
...
 '0,0' | '1,0'
-------|-------
 '0,1' | '1,1'
```

## Exercise 3 - Shuffle

Look at `./exercise-3.js`, as the file hints, create a function name `shuffle` which takes an array as an argument and shuffles each of the values within it randomly.

Once finished, run the script a few times to make sure the array is being shuffled randomly.
