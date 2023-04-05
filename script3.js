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