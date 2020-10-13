# Callbacks and Promises

## Exercise 1 - When do I run?

Take a look at `./exercise-1.js`, there are multiple outputs which claim that they run first. Replace each of the outputs to label when you think they would run. Once you think you have done so, run the file with node and take a look at the order of the outputs.

## Exercise 2 - Read from File

Take a look at the directory `./exercise-2`, inside is a file `important-info.txt` and also JS file named `read-file.js`. Within the second file is a function which should take a path argument, locate a file with it. Read the file's contents and then output them to the console. It should also retrieve the argument for the path as an argument from when `read-file.js` is run in the command line.

For example;

```
node exercise-2/read-file.js exercise-2/important-info.txt
```

To read from the `important-info.txt`, use the `fs` library which comes with the node modules we already have on our machine. The function `readFile` should be helpful with this exercise, make sure to look at how a callback is used and why you think it would be necessary.

## Exercise 3 - Promises

Take a look at `./exercise-3.js`, looks pretty messy. Try and use `promises` to neaten it but maintain its core functionality.
