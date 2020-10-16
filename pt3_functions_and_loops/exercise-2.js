// Create a map building Functions

// a) Function which builds a square Map and returns it
// example; buildMap(2) would return [['0,0', '1,0'],['0,1', '1,1']]

// Write your function here...

// This task is confusing for me. I don't understand it. 

buildMap = (num) => { 
    const square_array = []
    for(let i=0; i < num; i++)  {
        const newRow = []
        for (let j=0; j < num; j++) {
            newRow.push([i,j]);
        }
        square_array.push(newRow); 
    }
    return square_array;
};

let squareMap = buildMap(5);

console.log(squareMap);
console.log('\n');


// 

// b) Function to build a rectangular Map and return it

// Write your function here...

// let recMap = buildMap2(3, 7);

// console.log(recMap);
// console.log('\n');

// c) Function to output built map nicely into the console

// Write your function here...

// prettyMap(squareMap);
// prettyMap(recMap);
