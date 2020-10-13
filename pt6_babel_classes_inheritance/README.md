# Babel, Classes and Inheritance

## Exercise 1 - Babel

Take a look at the directory `./exercise-1`, inside is a directory named `src`. Within it, are several files which have been written in ES5+ code. Using Babel, compile the files from `src` to a directory named `lib`. To do this, use npm to install the necessary dependencies. The command below, can be used to install Babel dependencies to compile from the command line.

```
npm install --save-dev @babel/core @babel/cli
```

## Exercise 2

### a > Animal

Look at `./exercise-2.js`, build on the `Animal` class so that an `Animal` can be constructed with both a name and an age. Both of these attributes should be denoted as private, for each; define a `getter` method. For the name, define a `setter` method as well.

### b > Inheriting

Build on the `Cat` and `Dog` class so that they inherit behaviours from the `Animal` class. To the `Cat` class, add a method `meow` which simply returns a string of a cat noise. For the `Dog` class, add a method `woof` which simply returns a string of a dog noise.
