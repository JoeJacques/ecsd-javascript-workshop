// Switch

let animal = 'DOG'

// if (animal.toLowerCase() === "dog") {

//   console.log("WOOF!");

// } else if (animal.toLowerCase() === "snake") {

//   console.log("HISSSS");

// } else if (animal.toLowerCase() === "cat") {

//   console.log("MEOW");

// } else if (animal.toLowerCase() === "cow") {

//   console.log("MOO");

// } else {

//   console.log("Unrecognizable animal :(");

// }


switch(animal.toLowerCase()) {
  case 'dog':
    console.log('WOOF') 
    break;
  case 'snake':
    console.log('HISSS');
    break;
  case 'cat':
    console.log('MEOW');
    break; 
default: 
  console.log('aninal not found')
    


}