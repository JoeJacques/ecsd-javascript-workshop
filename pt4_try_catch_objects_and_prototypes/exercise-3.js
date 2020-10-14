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
    return shop.inventory[inventoryIndex].available

}

// Uncomment line below to test
console.log("Cherry Sundae available? ==> " + isAvailable(2));

// c) Adding Dynamic Entry

const new_item = (name=null,price=0.00,available=false) => {
  shop.inventory.push({name: name, price: price, available: available})
  console.log(shop.inventory[shop.inventory.length -1])
}

  new_item('coke', 2.99, true)

// Uncomment and replace argument with one which specifies to your item if necessary
console.log("Is the new item available? ==> " + isAvailable(5))

// d) Dynamic Reading +

const search = (query) => {
  for (let i=0; i < shop.inventory.length; i++) {
    if (shop.inventory[i].name.includes(query)) {
      console.log(shop.inventory[i].name)
    } else {
      continue;
    }
  }
}

// Uncomment line below to test
search("a");

// e) List All

const listAvailableInventory = () => {
  // Code here...
}

// Uncomment line below to test
// listAvailableInventory();

