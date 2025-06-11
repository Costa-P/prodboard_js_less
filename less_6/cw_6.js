// function outerFun(params) {
// 	let outerValue = 'I am';
// 	function innerF(name) {
// 			console.log(outerValue, name, params);
// 	}
// 	return innerF
// }

// let newFun = outerFun({ name: 'dima' });
// newFun('Doma');
		// ----------------------
// let counter = createCounter(15);
// function createCounter (num) {
// 	let link = num;
// 	function inn() {
// 		link --;
// 		console.log(link);
// 	}
// 	return inn
// }

// counter();
// counter();
// counter();
		// ----------------------

const leftName = {left:'left', r: 'r'};
const obj = {n: 'n'}

console.log({...leftName, obj});
