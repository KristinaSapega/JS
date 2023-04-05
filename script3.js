//1. 
const password = `Qwerty12345`;
const userInput = prompt (`Введите пароль`);
if (userInput === password ) {
    console.log (`Пароль введен верно`);
}
else {
   console.log (`Пароль введен неправильно`);
}

//2.
let c = 2;
if (c > 0 && c < 10) {
    console.log(`Верно`);
} else {
    console.log(`Неверно`);
}
// Результаты для значений c:
// c = 0: Неверно
// c = 10: Неверно
// c = -3: Неверно
// c = 2: Верно

//2.2
let c = 7;
let userInput = prompt (`Введите число`);
if (userInput == c && c > 0 && c < 10) {
    console.log (`Верно`);   
} else {
    console.log (`Неверно`);
}

//3.
let d = 33;
let e = 67;
if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
  }

  //4.
let a = 2;
let b = 3;
alert(a + b);

//5.
let monthNumber = prompt (`Введите номер месяца`);
if (monthNumber <= 12) {
switch (monthNumber) {
    case `1`:
    console.log (`Зима`);
    break;
    case `2`:
    console.log (`Зима`);
    break;
    case `3`:
    console.log (`Весна`);
    break;
    case `4`:
    console.log (`Весна`);
    break;
    case `5`:
    console.log (`Весна`);
    break;
    case `6`:
    console.log (`Лето`);
    break;
    case `7`:
    console.log (`Лето`);
    break;
    case `8`:
    console.log (`Лето`);
    break;
    case `9`:
    console.log (`Осень`);
    break;
    case `10`:
    console.log (`Осень`);
    break;
    case `11`:
    console.log (`Осень`);
    break;
    case `12`:
    console.log (`Зима`);
    break;
    default:
    console.log(`Такого месяца не существует`);
    break;
}
} else {
    console.log(`Такого месяца не существует`);
}
