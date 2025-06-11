// let list = {start: 1, end: 5};
// //console.log(list.start);
// list[Symbol.iterator] = function() {
//   return {
//     start: this.start,
//     end: this.end,
//     next() {
//       if (this.start <= this.end) return {done: false, value: this.start++};
//       return {done: true};
//     }
//   }
// };

// for (let item of list) {
//   console.log(item);
// }

let str1 = 'b_ln_dr(1)_bl';
let str2 = str1;
for (let el of ['_go','_bl']) {
	str2 = str2.replace(el,'')
}
console.log(str2);
str1 += '_aml'
console.log(str1);

