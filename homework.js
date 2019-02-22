// -------------------------- Home work --------------------------
// -------------------------- Dobriak Anna --------------------------
//------------Преобразование примитивов. Задачи.------
//Чему равно а, почему?

let a1 = 0 || 'string'; // string (0 - это false)
let a2 = 1 && 'string'; // string (Оба операнда true, вернет последнее true)
let a3 = null || 25; // 25 (null - это false)
let a4 = null && 25;  // null 
let a5 = null || 0 || 35; // 35 (null - это false, 0 - это false)
let a6 = null && 0 && 35; // null (null - это первый false, дальше искать не будет)

//Что отобразится в консоли. Почему?

12 + 14 + '12' // 2612 (операция сложения + конкатенация)
3 + 2 - '1' // 4 (операция сложения, затем вычитания, т.к. оператор '-' вызывает неявное преобразование к числовому типу)
'3' + 2 - 1 // 31 (конкатенация '3' + 2 = 32, затем операция вычитания - 1 = 31)
true + 2  // 3 (true = 1 + 2 = 3)
+'10' + 1 // 11 (унарный плюс '+' преобразует стороку '10' в число 10 + 1 = 11)
undefined + 2 // NaN 
null + 5 // 5 (null = 0 + 5 = 5)
true + undefined // NaN 


//--------------If else. Задачи.---------------
//1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let a = 'hidden';

if (a === 'hidden') {
	a = 'visible';
} else {
	a = 'hidden';
}

//2. Используя if, записать условие:
	//a. если переменная равна нулю, присвоить ей 1;
	//b. если меньше нуля - строку “less then zero”;
	//c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10 
	  // (использовать краткую запись).

let k = 0;

if (!k) {
	k = 1;
} else if (k < 0) {
	k = 'less then zero';
} else {
	k *= 10;
}

/*3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 
'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
*/

let car = {
	name: 'Lexus',
	age: 10,
	create: 2008,
	needRepair: false
};

if (car.age > 5) {
	console.log(`Need Repair: ${!car.needRepair}`);
}  else {
	console.log(`Need Repair: ${car.needRepair}`);
}

/*4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
  Написать условие если у item есть поле discount и там есть значение то в объекте item создать 
  поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, 
  обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы 
  выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.
*/

let item = {
	name: 'Intel core i7',
	price: '100$',
	discount: '15%',
	priceWithDiscount: ''
};

if (parseFloat(item.discount) > 0) {
	item.priceWithDiscount = parseFloat(item.price) - (parseFloat(item.price) / 100 * parseFloat(item.discount)) + '$';
	console.log(item.priceWithDiscount);
} else {
	console.log(item.price);
}

/*5. Дан следующий код:
let product = {
	name: “Яблоко”,
	price: “10$”
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена
Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной
цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
*/

let product = {
	name: 'Яблоко',
	price: '10$'
};
let min = 10; 
let max = 20; 

if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
	console.log(`name: ${product.name}`);
} else {
	console.log('Товаров не найдено');
}

//--------------Тернарный оператор. Switch case. Задачи.--------------

/* 1. Записать в виде switch case следующее условие:
if (a === ‘block’) {
	console.log(‘block’)
} else if (a === ‘none’) {
	console.log(‘none’)
} else if (a === ‘inline’) {
	console.log(‘inline’)
} else {
	console.log(‘other’)
}
Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.
*/

let d = 'none';
switch (d) {
	case 'block':
		console.log('block');
		break;
	case 'none':
		console.log('none');
		break;
	case 'inline':
		console.log('inline');
		break;	
	default:
		console.log('other');
}

// 2.Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора
//2.1 Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let b = 'hidden';

b = b === 'hidden' ? 'visible' : 'hidden';

/*2.2 
	a. если переменная равна нулю, присвоить ей 1;
	b. если меньше нуля - строку “less then zero”;
	c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10 
	(использовать краткую запись).
*/

let c = -9;

c = c === 0 ? 1
	: c < 0 ? 'less then zero'
		: c *= 10;

/*2.3 Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 
'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
*/

 let car2 = {
	name: 'Lexus',
 	age: 10,
 	create: 2008,
 	needRepair: false
};

car.age > 5 ? console.log(`Need Repair: ${!car.needRepair}`) : console.log(`Need Repair: ${car.needRepair}`);


