// Shop object

const shop = {
  name: "Happy Goods",
  location: "London - Old Street",
  currency: "Sterling (£)",
  inventory: [
    {
      name: "Apple Pie",
      price: 12.56,
      available: true
    },
    {
      name: "Banana Pastry",
      price: 6.25,
      available: true
    },
    {
      name: "Cherry Sundae",
      price: 9.99,
      available: false
    },
    {
      name: "Sharp Soda",
      price: 1.99,
      available: true
    },
    {
      name: "Tuna Sandwich",
      price: 3.29,
      available: false
    }
  ]
}

// a) Cost of Sharp Soda?

console.log(shop.inventory[3].price)

// b) Dynamic Reading

const isAvailable = (inventoryIndex) => {
  // Code here...
}

// Uncomment line below to test
// console.log("Cherry Sundae available? ==> " + isAvailable(2));

// c) Adding Dynamic Entry

// Code here...

// Uncomment and replace argument with one which specifies to your item if necessary
// console.log("Is the new item available? ==> " + isAvailable(5))

// d) Dynamic Reading +

const search = (query) => {
  // Code here...
}

// Uncomment line below to test
// search("h");

// e) List All

const listAvailableInventory = () => {
  // Code here...
}

// Uncomment line below to test
// listAvailableInventory();
