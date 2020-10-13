// When do I run?

console.log("I RUN: 1st");

const f = () => {
  console.log("I RUN: 1st");
  setTimeout(() => {
    console.log("I RUN: 1st");
  }, 500);
  console.log("I RUN: 1st");
}

f();

console.log("I RUN: 1st");
