// Try and Catch

// a)

const f1 = () => {
  let counter = 0;
  while (counter < 10) {
    console.log("Counter number is: " + counter);
    counter++;
  }
}

// Uncomment the line below to test
// f1();

// b)

const f2 = () => {
  throw new Error("What a dangerous function!");
}
