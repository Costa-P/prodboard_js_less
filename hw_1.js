  // task 1
let name = 'Roman';
let age = 47;
let sex;
let newVar;

newVar = 100;
console.log(newVar)

console.log('Task 1');
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
document.body.append('Task 1');

  // task 2
const strUserData = 'User Data:';
console.log('Task 2');
console.log(strUserData + ' ' + name + ', ' + age + '.');

    // task 3
let m = prompt('age');

console.log('Task 3');
console.log(`User Age: ${age}; *2 = ${m*=2}; +12 = ${m+=12}; /2 = ${m/=2}; -'User Age' = ${m-=age}`);
console.log(`Always "${m}"`);

  // task 4
let strUserAge = '47';
console.log('Task 4');
console.log(Number(strUserAge));
console.log(Number(`User Age: ${strUserAge}`));
  // task 5
const UserDataControl = {
  name: Boolean(name),
  age: Boolean(age),
  sex: Boolean(sex)
}
console.log('Task 4');
console.log(UserDataControl);
