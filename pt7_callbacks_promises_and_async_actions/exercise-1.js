// When do I run?

console.log("I RUN: 1st"); // Runs First 

const f = () => {
  console.log("I RUN: 1st"); // Runs Second 
  setTimeout(() => {
    console.log("I RUN: 1st4"); // Runs Last 
  }, 500);
  console.log("I RUN: 1st"); // Runs forth
}

f();

console.log("I RUN: 1st"); // runs fifth. 
