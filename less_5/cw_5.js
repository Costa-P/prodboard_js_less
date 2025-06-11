

// const obj = {
//   name: 'Roma',
//   getName(title) {
//     console.log(`${title} ${this.name}`);
//   },
//   getFullName(lastName) {
//     console.log(obj.getName('My name:') + ' ' + lastName);
//   }
// }

// obj.getName('My name:');
// obj.getFullName('Petlenko');


// const people = [
//   { name: "John", gender: "male" },
//   { name: "Jane", gender: "female" },
//   { name: "Mike", gender: "male" },
//   { name: "Alice", gender: "female" },
//   { style: 'lift', gender: 'unisex'}
// ];

// const group = people.reduce((acc, value) => {
//   const gender = value.gender;
//   if (!acc[gender]) {
//     acc[gender] = [];
//   }  
//   acc[gender].push(value);
//   return acc;
// }, {})

// console.log(group);

// const rez = {
//   // male: people.filter(n => n.gender === 'male'),
// }
// {
//   "male": [
//       {
//           "name": "John",
//           "gender": "male"
//       },
//       {
//           "name": "Mike",
//           "gender": "male"
//       }
//   ],
//   "female": [
//       {
//           "name": "Jane",
//           "gender": "female"
//       },
//       {
//           "name": "Alice",
//           "gender": "female"
//       }
//   ]
// }

// const customers = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
//   { id: 3, name: "Mike" }
// ];
// const purchases = [
//   { customerId: 1, product: "Laptop" },
//   { customerId: 2, product: "Phone" },
//   { customerId: 1, product: "Tablet" }
// ];

// let rez = customers.map(el => {
//   let product = purchases.filter(n => n.customerId === el.id);
//   // [
//   //   { customerId: 1, product: "Laptop" },
//   //   { customerId: 1, product: "Tablet" }
//   // ]
//   return {...el, product: product.map(p => p.product)};
// })

// console.log(rez);
// [
//   {
//       "id": 1,
//       "name": "John",
//       "products": [
//           "Laptop",
//           "Tablet"
//       ]
//   },
//   {
//       "id": 2,
//       "name": "Jane",
//       "products": [
//           "Phone"
//       ]
//   },
//   {
//       "id": 3,
//       "name": "Mike",
//       "products": []
//   }
// ]

// ------------
const items = [
  { name: "Book", price: 12.99, quantity: 3 },
  { name: "Pen", price: 1.29, quantity: 10 },
  { name: "Notebook", price: 5.99, quantity: 2 }
];

let rez = items.reduce( (acc, value) => {
  // console.log(value.price);
  acc += (value.price * value.quantity);
  // console.log(acc);
  return acc
}, 0);

console.log(rez);