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

//7.
/*Создайте программу, проверяющую число на четность/нечетность 
по следующему алгоритму:
Создать переменную и присвоить ей значение с помощью метода 
prompt()«Пожалуйста, введите любое число».
Добавить проверку: является ли введенное значение числом.
При приведении строки к числу нам вернется либо корректное значение, либо 
NaN.
Добавить проверку, является ли число четным или нет.
Четные числа делятся на 2 без остатка.
Добавить проверку: если число четное, 
то вывести пользователю сообщение «Число четное» с помощью 
alert.
Добавить проверку: если число нечетное, то вывести пользователю сообщение 
«Число нечетное» с помощью alert.
*/

let input = prompt("Пожалуйста, введите любое число");
  let number = Number(input);
  if (number % 2 === 0) {
    alert("Число четное");
  } else {
    alert("Число нечетное");
  }

  //8.
/*Представим, что мы работаем в банке. 
У нашего банка есть сайт, на который можно зайти с компьютера или телефона, 
а также мобильное приложение.
И нам, и клиенту удобнее с телефона пользоваться мобильным приложением. 
Поэтому каждый раз, когда пользователь заходит на сайт с телефона, 
мы должны выдавать ему ссылку на скачивание приложения. 
Но мы не знаем, iOS или Android он использует.
Напишите программу, которая определяет, 
чем пользуется клиент (iOS или Android), 
и выдает соответствующее сообщение для обоих вариантов.
Объявите переменную clientOS, которая равна 0 или 1. (0 — iOS, 1 — Android)
При отработке программы в консоли должно выдаваться сообщение об установке 
соответствующего приложения.
Например, для iOS оно будет звучать так:
«Установите версию приложения для iOS по ссылке».
А для Android так:
«Установите версию приложения для Android по ссылке».
*/

let clientOS = 0;
if(clientOS === 0) {
 console.log (`Установите версию приложения для iOS по ссылке`);
}
else {
 console.log (`Установите версию приложения для Android по ссылке`);
}

//9.
/* К нам пришли коллеги и сообщили, что нам нужно знать не только операционную систему телефона,
но и год его создания: от этого зависит, подойдет ли приложение для телефона 
или оно просто не установится.
Если телефон произведен с 2015 по нынешний год, 
то приложение будет работать корректно.
Если телефон произведен ранее 2015 года, 
то клиенту нужно посоветовать установить облегченную версию приложения.
Ваша задача: написать программу, которая выдает соответствующее сообщение клиенту 
при наличии двух условий: операционной системы телефона (iOS или Android) 
и года производства.
Если год выпуска ранее 2015 года, то к сообщению об установке 
нужно добавить информацию об облегченной версии.
Например, для iOS оно будет звучать так:
«Установите облегченную версию приложения для iOS по ссылке».
А для Android так:
«Установите облегченную версию приложения для Android по ссылке».
При этом для пользователей с телефоном с 2015 года выпуска 
нужно вывести обычное предложение об установке приложения.
Для обозначения года создания используйте переменную clientDeviceYear, 
где необходимо указать 2015 год.
Важно: вложенность больше двух этажей не допускается 
(условный оператор внутри условного оператора).
*/
//вариант 1. Не совсем корректно работает. Кажется проблема во вложенности и скобках//

let clientOS = 0;
let clientDeviceYear = 2023;

if (clientOS === 0) {
    if (clientDeviceYear < 2015) {
        console.log (`Установите облегченную версию приложения для iOS по ссылке`);   
    } else {
        console.log (`Установите облегченную версию приложения для Android по ссылке`);   
    } 
} else if (clientOS === 1) {
        if (clientDeviceYear >= 2015) {
            console.log (`Установите версию приложения для Android по ссылке`);
        } else {
            console.log (`Установите версию приложения для iOS по ссылке`);
        }
    }

