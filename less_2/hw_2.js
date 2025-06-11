
function taskOne(el) {
  const mounth = checkNumber(el.month.value);
    // check Data
  let errFormOne = document.getElementById('errFormOne');
  if (typeof mounth !== 'number' || mounth < 1 || mounth > 12) {
    errOut(errFormOne, 'Данные не являются числом от 1 до 12');
    return false
  }
  errFormOne.hidden = true;
  errFormOne.innerHTML = ''; // не уверен в правильности
    // calculator
  let m = mounth + 1 > 12 ? 1 : mounth + 1;
  let season = Math.trunc( m/4 ) + 1;

    // variant 1
  let north = { 1: 'Зима', 2: 'Весна', 3: 'Лето', 4: 'Осень' }[season];

    // variant 2
  let south;
  switch (season) {
    case 1:
      south = 'Лето';
      break;
    case 2:
      south = 'Осень';
      break;
    case 3:
      south = 'Зима';
      break;
    case 4:
      south = 'Весна';
      break;
  }

  ['out_one_north','out_one_south'].forEach(el => document.getElementById(el).hidden = false);
  document.getElementById('out_one_north').innerHTML = `В северном полушарии - ${north}`;
  document.getElementById('out_one_south').innerHTML = `В южном полушарии - ${south}`;
  return false
}

function taskTwo(el) {
  
  const first = checkNumber(el.first.value);
  const second = checkNumber(el.second.value);
  const operation = el.operation_two.value;
    // check Data
  let errFormTwo = document.getElementById('errFormTwo');
  if (typeof first !== "number") {
    errOut(errFormTwo, `First data ${first}`);
    return false;
  } 
  if (typeof second !== "number") {
    errOut(errFormTwo, `Second data ${second}`);
    return false;
  } 
  errFormTwo.hidden = true;
  errFormTwo.innerHTML = ''; // не уверен в правильности
    // calculator
  let out;
  switch (operation) {
    case '+':
      out = first + second;
      break;
    case '-':
      out = first - second;
      break;
    case '*':
      out = first * second;
      break;
    case '/':
      out = first / second;
      break;
  }
  document.getElementById('out_two').innerHTML = out;
  
  return false
}

function taskThree(el) {
  const point = checkNumber(el.point.value);
    // check Data
  let errFormThree = document.getElementById('errFormThree');
  if (typeof point !== 'number' || point < 0 || point > 100) {
    errOut(errFormThree, 'Данные не являются числом от 0 до 100');
    return false
  }
  errFormThree.hidden = true;
  errFormThree.innerHTML = ''; // не уверен в правильности
    // calculator
  let list = {
    49: 'Неудовлетворительно',
    74: 'Удовлетворительно',
    89: 'Хорошо',
    100: 'Отлично',
  }
  let out_three = list[Object.keys(list).find(n => n >= point)];
  document.getElementById('out_three').innerHTML = out_three;

  return false
// 90-100: "Отлично"
// 75-89: "Хорошо"
// 50-74: "Удовлетворительно"
// 0-49: "Неудовлетворительно"

}

document.getElementById('press_four').addEventListener('click', taskFour);
function taskFour() {
  for (let i = 0; i < 8; i++) {
    let arr = '';
    for (let j = 0; j < 8; j++) {
      if ( i%2 === 0 ) {
        if (j%2 !== 0) {
          arr +='#';
        } else {
          arr +=' '
        }
      } else {
        if (j%2 === 0) {
          arr += '#';
        } else {
          arr += ' ';
        }
      } 
    }
    console.log(arr);
  }
  return false
}

function taskFive(el) {
  const h_tree = checkNumber(el.h_tree.value);
    // check Data
  let errFormFive = document.getElementById('errFormFive');
  if (typeof h_tree !== 'number' || h_tree < 2 || h_tree > 10) {
    errOut(errFormFive, 'Данные не являются числом от 2 до 10');
    return false
  }
  errFormFive.hidden = true;
  errFormFive.innerHTML = ''; // не уверен в правильности
    // calculator
  let arr_length = h_tree*2 -1;

  for (let h = 0; h < h_tree; h++) {
    main = (h+1)*2 - 1;
    empty = arr_length/2 - main/2;
    let arr = '';
    for (let w = 0; w < arr_length; w++) {
      if ( w+1 <= empty || w+1 > main + empty ) {
        arr+= ' ';
      } else {
        arr+= '*';
      }
    }
    console.log(arr)
  }

  return false
}

document.getElementById('press_six').addEventListener('click', taskSix);
function taskSix() {
  for (let i = 0; i < 10; i++) {
    let arr = [];
    let el;
    for (let j = 0; j < 10; j++) {
        el = (j+1) * (i+1);
        if (el <= 9) el+= ' ';
        arr.push( el );
    }
    console.log(arr.join(' '));
  }
  return false
}

function taskSeven(el) {
    // check Data
  let userNum = checkNumber(el.userIntTs7.value);
  let errFormSeven = document.getElementById('errFormSeven');
  if (typeof userNum  !== 'number' || userNum <= 0) {
    errOut(errFormSeven, 'Данные не являются целым положительным числом');
    return false
  }
  errFormSeven.hidden = true;
  errFormSeven.innerHTML = ''; // не уверен в правильности

    // calculator
  document.getElementById('out_seven').innerHTML = `${userNum}! = ${factorial(userNum)}`

  function factorial(n) {
    return n !== 1 ? n * factorial(n - 1) : 1
  }

  return false
}


function checkNumber(num) {
  if (num.split('').some( el => !['0','1','2','3','4','5','6','7','8','9'].includes(el))) return 'not Number';
  return Number(num)
}

function errOut(err, text) {
  err.hidden = false;
  err.innerHTML = text;
  err.style.cssText = "color: red; padding-bottom: 10px;";
  return false
}

document.getElementById('resetFormOne').addEventListener('click', resetFormOne);
document.getElementById('resetFormTwo').addEventListener('click', resetFormTwo);
document.getElementById('resetFormThree').addEventListener('click', resetFormThree);
document.getElementById('resetFormFive').addEventListener('click', resetFormFive);
document.getElementById('resetFormSeven').addEventListener('click', resetFormSeven);

function resetFormOne() {
  document.getElementById('form_one').reset();
  ['out_one_north','out_one_south','errFormOne'].forEach(el => {
    let slot = document.getElementById(el)
    slot.hidden = true;
    slot.innerHTML = '';
  })
}

function resetFormTwo() {
  document.getElementById('form_two').reset();
  document.getElementById('out_two').innerHTML = '';
  clearError('errFormTwo');
} 

function resetFormThree() {
  document.getElementById('form_three').reset();
  document.getElementById('out_three').innerHTML = '';
  clearError('errFormThree');
}

function resetFormFive() {
  document.getElementById('form_five').reset();
  let err = document.getElementById('errFormFive');
  err.hidden = true;
  err.innerHTML = '';
}

function resetFormSeven() {
  document.getElementById('form_seven').reset();
  document.getElementById('out_seven').innerHTML = '';
  clearError('errFormSeven');
}

function clearError(elem) {
  let err = document.getElementById(elem);
  err.hidden = true;
  err.innerHTML = '';
}