let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

// screen
const out = document.querySelector('.calc__screen p');
function clearAll () {
  a = '';
  b = '';
  sign = '';
  finish = false;
  out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;
document.querySelector('.buttons').onclick = (event) => {
  if(!event.target.classList.contains('btn')) return;
  if(event.target.classList.contains('ac')) return; // можно подпарвить если сработка тут вызываем функцию clearAll

  out.textContent = '';
  // получаем нажатую кнопку
  const key = event.target.textContent;
  // если нажата кнопка из массива digit
  if(digit.includes(key)) {
    if (b === '' && sign === '') {
      a += key;
      out.textContent = a;
    }else if(a !== '' && b !== '' && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    }else {
      b += key;
      out.textContent = b;
    }
    console.log(a, b, sign);
    return;
  }
  // если нажата кнопка из массива action
  if(action.includes(key)) {
    sign = key;
    out.textContent = sign;
    return;
  }
  // если нажали =
  if(key === '=') {
    if(b === '') b = a;
    switch (sign) {
      case '+':
        a = (+a) + (+b);
        break;
      case '-':
        a = a - b;
        break;
      case 'X':
        a = a * b;
        break;
      case '/':
        if(b === '0') {
          out.textContent = "Error";
          a = '';
          b = '';
          sign = '';
          return;
        }
        a = a / b;
        break;
    }
    finish = true;
    out.textContent = a;
    console.log(a, b, sign);
  }
}

// работа с темой

let themaDark = true;

function changeThema() {
  const button = document.querySelector('.thema');
  const wrapper = document.querySelector('.wrapper');
  const text = document.querySelector('.thema__label');
  if (themaDark) {
    text.classList.remove('dark');
    wrapper.classList.remove('dark');
    button.textContent = 'off';
  } else {
    text.classList.add('dark');
    wrapper.classList.add('dark');
    button.textContent = 'on';
  }
  
  themaDark = !themaDark;
  
  return themaDark;
}

const button = document.querySelector('.thema');
button.addEventListener('click', changeThema);