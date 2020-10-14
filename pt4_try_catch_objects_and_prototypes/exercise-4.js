// Prototype for Shop
const inventory = [
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

function Shop(name, location, currency, inventory) {
  this.name = name;
  this.location = location;
  this.currency = currency;
  this.inventory = inventory;

// Methods 

  this.isAvailable = (index ) => this.inventory[index].available
  this.addItem = (name=null,price=0.00,available=false) => {
  this.inventory.push({name: this.name, price: this.price, available: this.available})
  }
  this.search = (query) => { 
    for (let i=0; i < this.inventory.length; i++) {
      if (this.inventory[i].name.includes(query)) {
        console.log(this.inventory[i].name)
      }else {
        continue 
      }
      }
    }
    this.listAvailableInventory = () => { 
      for (let i=0; i < this.inventory.length; i++) {
        if (this.inventory[i].available === true) {
          console.log(this.inventory[i].name + ' ' + this.inventory[i].price)
        } else {
          continue;
    }
  }
}
}

  // Code here...

const shop = new Shop("Happy Goods", "London - Old Street", "Sterling (£)", inventory);

console.log(`Is a Sharp Soda available? ==> ${shop.isAvailable(3)}`);

// shop.addItem("Tomato Soup", 1.25, true);
// console.log(`Is the new item available? ==> ${shop.isAvailable(5)}`);

// shop.search("S");

// shop.listAvailableInventory();
