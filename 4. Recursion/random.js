// Please implement a software for a Coffee House using Object Oriented Programming. If you are not familiar or
// comfortable with object-oriented programming, we suggest you give this article a quick read to ensure you
// understand it before you attempt it.
// It should have the following features:
// - Allow users to order a coffee from Espresso, Cappuccino, Latte.
// - Allow users to specify add-ons: Milk, Cream, Latte
// Prices for the available options are as follows

// class Coffee {
//   constructor(user, CofeeType, adOns, price) {
//     this.user = user;
//     this.CofeeType = CofeeType;
//     this.adOns = adOns;
//     this.price = price;
//     this.getReceipt = function () {
//       return `${this.user}`;
//     };
//   }
// }

const cofeeDetails = [
  {
    CofeeType: "Espresso",
    adOns: ["Milk", "Cream", "Latte"],
    price: {
      Milk: 60,
      Cream: 75,
      Latte: 100,
    },
  },
  {
    CofeeType: "Cappuccino",
    adOns: ["Milk", "Cream", "Latte"],
    price: {
      Milk: 80,
      Cream: 90,
      Latte: 125,
    },
  },
  {
    CofeeType: "Latte",
    adOns: ["Milk", "Cream", "Latte"],
    price: {
      Milk: 100,
      Cream: 125,
      Latte: 150,
    },
  },
];

const order = new Coffee(user, cofeeTypes[0], addOns[0], price);
