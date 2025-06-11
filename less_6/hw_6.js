// // задача 1
// // Генерация всех возможных комбинаций

// const generateCombinations = (array) => {
// 	let prod = [];
// 	const recursGenerate = (arr) => {
// 		prod.push(arr);
// 		if (arr.length > 1) {
// 			for (let i = 0; i < arr.length; i++) {
// 				let nextArr = arr.filter((n,j) => n && j !== i);
// 				recursGenerate(nextArr);
// 			}
// 		}
// 		return prod;
// 	}
// 	recursGenerate(array);
// 	let set = new Set(prod.map(JSON.stringify));
// 	// console.log(set);
// 	prod = Array.from(set).map(JSON.parse);
// 	return prod;
// }

// console.log(generateCombinations([1, 2, 3]));
// // Ожидаемый результат: [[1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]

//----------------------------*/

// // задача 2

// const obj = {
//     a: { aa: 1 },
//     b: { c: 2, d: { e: 3 } },
// 		f: 4,
// 		g: { h: 5	}
// };

// // const obj = {
// //     a: 1,
// //     b: { c: 2, d: { e: 3 } },
// // };

// const prod = {};
// let keyProd;
// const flattenObject = (object) => {
// 	for (let key in object) {	
// 		const checkKey = () => { // сборка ключа
// 			if (keyProd) return keyProd + `.${key}`;
// 			return key;
// 		};
// 		if (typeof object[key] === 'object') {	
// 			keyProd = checkKey();	// удлиняем ключ
// 			flattenObject(object[key]);	// ныряем
// 			keyProd = undefined;	// вынурныв - обнуляем ключ
// 		} else { // на дне
// 			let keyLast = checkKey(); // итоговый ключ
// 			prod[keyLast] = object[key]; 
// 		};
// 	}
// 	return prod
// }

// console.log(flattenObject(obj)); 
// // Ожидаемый результат: { 'a': 1, 'b.c': 2, 'b.d.e': 3 }

function generateCombinations(arr) {
	const result = [];

	const helper = (currentCombo, remainingElements) => {
			if (remainingElements.length === 0) {
					result.push(currentCombo);
					return;
			}

			// Включаем первый элемент из оставшихся
			helper(currentCombo.concat(remainingElements[0]), remainingElements.slice(1));

			// Не включаем первый элемент из оставшихся
			helper(currentCombo, remainingElements.slice(1));
	};

	helper([], arr);
	return result;
}

// Пример использования
const array = [1, 2, 3, 4];
const combinations = generateCombinations(array);
console.log(combinations);