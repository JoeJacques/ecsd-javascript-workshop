// Shuffle the array

let array = []
for (let i = 1; i <= 25; i++) {
  array.push(i);
}
console.log("Standard array: " + array);

// Your function...


shuffle = (array) => { 
  array.sort(() => Math.random() - 0.5)
  return array
}

let shuffledArray = shuffle(array);
console.log("Shuffled array: " + shuffledArray);
