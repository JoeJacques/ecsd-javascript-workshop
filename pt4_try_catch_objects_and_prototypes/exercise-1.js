// Try and Catch

// a)


  const f1 = () => {
  try { 
  while (counter < 10) {
    console.log("Counter number is: " + counter);
    counter++;
  } 
  } catch (error) {console.error(console.error())}
}

f1();


// b)

const f2 = () => {
  throw new Error("What a dangerous function!");
}
