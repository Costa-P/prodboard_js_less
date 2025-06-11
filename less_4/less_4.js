// let arr = [0,1,2,3];
// arr = [...arr, 5,6,7];
// console.log(arr.findIndex(n => n > 2));
// console.log(arr);
// console.log(arr.findIndex(d => d > 3));

// let out = arr.slice(arr.findIndex(n => n > 2), arr.findIndex(n => n > 6));
// console.log(out);

const items = [ { name: 'Item1', price: 100 }, { name: 'Item2', price: 200 }, { name: 'Item3', price: 300 } ];

let out = items.map(n => {return {...n, priceH: n.price*1.1}});
for (let i = 0; i < out.length; i++) {
  console.log(out[i]);
}


// const people = [ { name: 'John', age: 18 }, { name: 'Jane', age: 22 }, { name: 'Mike', age: 30 }, { name: 'Alice', age: 20 } ];

// let outP = people.filter(n => n.age >=21);
// for (let i = 0; i < outP.length; i++) {
//   console.log(outP[i]);
// }