  // Task 1
  // Знайти найбільший елемент у масиві
console.log('Task 1');

const numbersTs1 = [10, 20, 30, 40, 50];
    // V-1
let max = getMaxOfArray(numbersTs1);
function getMaxOfArray(arr) {
  return Math.max.apply(null, arr);
} 
console.log(`V-1 => ${max}`); // 50

    // V-2
let reversNumbers = numbersTs1.reverse(); 
max = reversNumbers.sort((a,b) => a-b).pop();
console.log(`V-2 => ${max}`); // 50

  // V-3
console.log(Math.max(...numbersTs1));

  // Task 2
// Перевірити, чи є у масиві задане число
console.log('Task 2');

const numbersTs2 = [5, 8, 12, 19, 23];
const searchNumber = 12;
let exists = numbersTs2.includes(searchNumber);
console.log(exists); // true

  // Task 3
// Фільтрувати масив і залишити тільки парні числа
console.log('Task 3');

const numbersTs3 = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbersTs3.filter(n => n && n%2 === 0);
console.log(evenNumbers); // [2, 4, 6]

  // Task 4
// Повернути новий масив, де кожен елемент помножений на свій індекс
console.log('Task 4');

const numbersTs4 = [10, 10, 10, 10, 10];
let multiplied = numbersTs4.map((el, i) => el*i);
console.log(multiplied); // [0, 10, 40, 90, 160]
  // помножений на квадрат свого індексу
console.log(numbersTs4.map((el, i) => el*i**2));

  // Task 5
// Об'єднати два масиви та видалити дублі
  console.log('Task 5');
  
const array1 = [1, 2, 3];
const array2 = [3, 4, 2, 5, 6];
//let arrTs5 = array1.concat(array2);
let arrTs5 = [...array1, ...array2];
//console.log(arrTs5);
  // V-1
let combined = arrTs5.filter((el, i) => {
  //console.log(arrTs5.indexOf(el) +' => '+i);
  return arrTs5.indexOf(el) === i;
});
console.log(combined)

  // V-2
let combined_2 = arrTs5.reduce((acc, el) => {
  return acc.includes(el) ? acc : [...acc, el];
}, []);
console.log(combined_2); // [1, 2, 3, 4, 5, 6]

  // Task 6
// Відсортувати масив об'єктів за властивістю age
console.log('Task 6');

const people = [
  { name: 'Charlie', age: 35 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
];
let sortedPeople = people.sort((a,b) => a.age - b.age)
console.log(sortedPeople); // [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]
for (let i = 0; i < sortedPeople.length; i++) {
  console.log(sortedPeople[i]);
}

  // Task 7
// Знайти всі унікальні значення з масиву масивів
console.log('Task 7');

const arrays = [[1, 2, 3], [3, 4, 5], [5, 6, 7]];
let arr7 = arrays.flat();
let uniqueValues = arr7.filter((el, i) => {
  return arr7.indexOf(el) === i;
});
console.log(uniqueValues); // [1, 2, 3, 4, 5, 6, 7]
  // V-2
console.log(new Set([...arrays.flat()]));
  // Task 8
// Для кожного студента знайти його оцінку з математики
console.log('Task 8');

const students = [
  { name: 'John', id: 1 },
  { name: 'Alice', id: 2 },
  { name: 'Bob', id: 3 }
];
const grades = [
  { studentId: 1, subject: 'Math', grade: 90 },
  { studentId: 2, subject: 'Math', grade: 85 },
  { studentId: 3, subject: 'Math', grade: 75 },
  { studentId: 1, subject: 'Science', grade: 80 }
];

const result = [];
for (let i = 0; i < students.length; i++) {
  let grade = grades.find(el => el.studentId === students[i].id && el.subject === 'Math').grade;
  result.push({name: students[i].name, mathGrade: grade});
}
console.log(result); // [{ name: 'John', mathGrade: 90 }, { name: 'Alice', mathGrade: 85 }, { name: 'Bob', mathGrade: 75 }]
for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
    // V-2
// let rez = students.map(el => {
//   let item = {...el};
//   let grade = grades.find(n => n.studentId === item.id && n.subject === 'Math').grade;
//    delete item.id;
//   return {...item, mathGrade: grade};
// });
// for (let i = 0; i < rez.length; i++) {
//   console.log(rez[i]);
// }
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}


