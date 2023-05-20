//169.1
// function sumOfArr(arr) {
// 	let res = 0;

// 	for (let elem of arr) {
// 		res += elem;
// 	}

// 	return res / arr.length;
// }
// console.log(sumOfArr([123, 135, 31]));

//156.1
// function nameFunc(name) {
// 	console.log('Temirlan');
// }
// nameFunc();

//156.2
// function sumOfNum(arr) {
// 	let sum = 0;

// 	for (let i = 1; i <= 100; i++) {
// 		sum += i;
// 	}
// 	return sum;
// }
// console.log(sumOfNum());

//157.1 Параметры функций в JavaScript
// function cube(num) {
// 	return Math.pow(num, 3);
// }
// console.log(cube(3));
// console.log(cube(14));

//157.2
// function positiveOrNegative(num) {
// 	if (num >= 0) {
// 		console.log('+++');
// 	} else {
// 		console.log('---');
// 	}
// }
// positiveOrNegative(1);

//158.1 Несколько параметров функций в JavaScript
// function sumOfNumbers(num1, num2, num3) {
// 	console.log(+num1 + +num2 + +num3);
// }
// sumOfNumbers(12, 21, 2);

//159.1 Параметры-переменные функций в JavaScript
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;

// function func(num1, num2, num3) {
// 	console.log(+num1 + +num2 + +num3);
// }
// func(param1, param2, param3);

//160.1 Необязательные параметры в JavaScript
// function func(num = 5) {
// 	console.log(num * num);
// }

// func(2); //4
// func(3); //9
// func(); //25

//160.2
// function func(num1 = 0, num2 = 0) {
// 	console.log(num1 + num2);
// }

// func(2, 3); //5
// func(3); //3
// func(); //0

//161.1 Инструкция return в JavaScript
// function func(num) {
// 	return num ** 3;
// }
// let res = func(3)
// console.log(res);

//161.2
// function func(num) {
// 	return Math.sqrt(num);
// }
// let res = func(3) + func(4);
// console.log(res);

//162.1 Последовательный вызов функций в JavaScript
// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function round(num) {
// 	return num.toFixed(3);
// }
// let res = round(sqrt(2));
// console.log(res);

//162.2
// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// let res = sum(sqrt(2), sqrt(3), sqrt(4));
// console.log(res);

//162.3
// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }

// function round(num) {
// 	return num.toFixed(3);
// }

// let res = round(sum(sqrt(2), sqrt(3), sqrt(4)));
// console.log(res);

//163.1 Тонкое место return в JavaScript
// function func(num) {
// 	return num;

// 	let res = num ** 2;
// 	return res;
// }

// console.log(func(3)); //3

//163.2
// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	} else {
// 		return num ** 2;
// 	}
// }

// console.log(func(10)); //100
// console.log(func(-5)); //5

//163.3
// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	}

// 	return num ** 2;
// }

// console.log(func(10)); //100
// console.log(func(-5)); //5

//164.1 Цикл и return в JavaScript
// function func(num) {
// 	let sum = 0;

// 	for (let i = 1; i <= num; i++) {
// 		sum += i;
// 	}
// 	return sum;
// }

// console.log(func(5));

//165.1 Применение return в циклах в JavaScript
// function func(num) {
// 	let sum = 0;
// 	let i = 1;

// 	while (true) {
// 		sum = num /= 2;

// 		if (sum < 10) {
// 			return i;
// 		}
// 		i++;
// 	}
// }

// console.log(func(555)); //6

//166.1 Прием работы с return в JavaScript
// function func(num1, num2) {
// 	if (num1 > 0 && num2 > 0) {
// 		return num1 * num2;
// 	} else {
// 		return num1 - num2;
// 	}
// }

// console.log(func(3, 4));

//167.1 Флаги в функциях JavaScript
// function positiveArr(arr) {
// 	return arr.every((num) => num % 2 === 0);
// }

// console.log(positiveArr([0, 1, 2]));

//167.2
// function positiveArr(arr) {
// 	return arr.every((num) => num % 2 === 1);
// }

// console.log(positiveArr([1, 3]));

//167.3 Ne resheno
// function check(a) {
// 	for (var q = 1; q < a.length; ++q) {
// 		if (a[q] === a[q - 1]) {
// 			return true;
// 		}
// 	}

// 	return false;
// }

// console.log(check([3, 1, 2, 1, 12]) ? 'Да' : 'Нет');

//168.1 Логические операторы без if в функциях JavaScript
// function func(a, b) {
// 	return a == b;
// }

//168.2
// function func(a, b) {
// 	return a != b;
// }

//168.3
// function func(a, b) {
// 	return a + b >= 10;
// }

//168.4
// function func(num) {
// 	return num >= 0;
// }

//169.1 Советы по созданию функций в JavaScript
// Имена функций должны быть глаголами.
// Имя каждой функции должно точно отражать то, что функция делает.
// Функция должна делать только то, что явно подразумевается её названием, и не делать другого.
// Каждая функция должна выполнять только одно действие.
// Используйте внутри функций вспомогательные функции.
// Код функций лучше не делать длиннее 10-15 строк.
// Длинные функции лучше разбивать на ряд вспомогательных.
// Используйте общепринятые префиксы в именах функций: show, get, set, calc, create, change, check.
// Выносите дублирующийся код в функции.

// function sum(arr) {
// 	let res = 0;

// 	for (let elem of arr) {
// 		res += elem / arr.length;
// 	}

// 	return res;
// }
// console.log(sum([213, 21, 62]));

//169.2
// function func(arr1, arr2) {
// 	let res1 = 0;

// 	for (let elem of arr1) {
// 		res1 += elem;
// 	}

// 	let res2 = 0;

// 	for (let elem of arr2) {
// 		res2 += elem;
// 	}

// 	return res1 / res2;
// }

// console.log(func([123], [516]));

//169.3
// function getSum(arr) {
// 	let res = 1;

// 	for (let elem of arr) {
// 		res *= elem;
// 	}
// 	return res;
// }
// console.log(getSum([214, 21, 2]));

//170.1 Поиск ошибок в коде с функциями JavaScript
// function func1() {
// 	return 3;
// }
// function func2() {
// 	return 5;
// }

// console.log(func1() + func2());

//170.2
// function sum(arr) {
// 	let res = 0;

// 	for (let elem of arr) {
// 		res += elem;
// 	}
// 	return res;
// }

// console.log(sum([1, 2, 3, 4, 5]));

//170.3
// let arr = [1, 2, 3, 4, 5];

// function func(arr) {
// 	let res = 0;

// 	for (let elem of arr) {
// 		res += elem;
// 	}
// 	return res;
// }
// console.log(func(arr));

//170.4
// function func1() {
// 	return 3;
// }
// function func2() {
// 	return 5;
// }

// console.log(func1() + func2());

//170.5
// let result = sum([1, 2, 3, 4, 5]);
// console.log(result);

// function sum(arr) {
// 	let sum = 0;

// 	for (let elem of arr) {
// 		sum += elem;
// 	}

// 	return sum;
// }

//170.6
// let res = sum([1, 2, 3, 4, 5]);
// console.log(res);

// function sum(arr) {
// 	let sum = 0;

// 	for (let elem of arr) {
// 		sum += elem;
// 	}
// 	return sum;
// }

//170.7
// function add(num) {
// 	if (num <= 9) {
// 		return '0' + num;
// 	}
// 	return num;
// }
// console.log(add(2));

//170.8
// let arr = [1, 2, 3, 4, 5];
// let sum = sumOfArr(arr);
// console.log(sum);

// function sumOfArr(arr) {
// 	let res = 0;

// 	for (let elem of arr) {
// 		res += elem;
// 	}

// 	return res;
// }

//170.9
// let num = 12345;
// let res = getDigitsSum(num);
// console.log(res);

// function getDigitsSum(num) {
// 	let str = String(num);
// 	let arr = str.split('');
// 	let sum = 0;

// 	for (let elem of arr) {
// 		sum += +elem;
// 	}

// 	return sum;
// }

//170.10
// console.log(isPrime(8));

// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i !== 0) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// }

//171.1 Практика на функции в JavaScript
// function sumOfArr(arr) {
// 	let sum = 0;

// 	for (let elem of arr) {
// 		sum += elem;
// 	}
// 	return sum;
// }
// console.log(sumOfArr([21, 51, 123]));

//171.2 net
// function func(num) {
// 	var newArr = [];

// 	for (let i = 1; i <= num; i++) {
// 		if (num % i == 0) {
// 			newArr.push(i);
// 		}
// 	}
// 	return newArr;
// }
// console.log(func(23));

//171.3
// function strArr(str) {
// 	return str.split('');
// }
// console.log(strArr('Temirlan'));

//171.4
// function strArr(str) {
// 	return str.split('').reverse();
// }
// console.log(strArr('Temirlan'));

//171.5 net
// function strArr(str) {
// 	return str[0].toUpperCase() + str.slice(1);
// }
// console.log(strArr('temirlan'));

//171.6 Net
// function strArr(str) {
// 	let words = str.split(' ');

// 	for (let i = 0; i < words.length; i++) {
// 		words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// 	}
// 	return words.join(' ');
// }
// console.log(strArr('temirlan super star'));

//171.7
// function fitArr(num) {
// 	var newArr = [];

// 	for (let i = 0; i <= num; i++) {
// 		newArr.push(i);
// 	}
// 	return newArr;
// }
// console.log(fitArr(7));

//171.8 Ne ya reshil
// function randomArr(arr) {
// 	let res = Math.floor(Math.random() * arr.length);
// 	return arr[res];
// }
// console.log(randomArr([12, 36, 616, 213]));

//171.9 Ne resheno
// function naturNum(num) {
// 	for (let i = 2; i < num.length; i++) {
// 		if (i % num !== 0) {
// 			return false;
// 		} else {
// 			return true;
// 		}
// 	}
// }
// console.log(naturNum(12));

//171 Задачки не решены полностью

//172.1 Глобальные переменные в функциях в JavaScript
// let num = 1;

// function func() {
// 	console.log(num);
// }

// func(); //1

//172.2
// let num = 1;

// function func() {
// 	console.log(num);
// }

// num = 2;
// func(); //2

//172.3
// function func() {
// 	console.log(num);
// }

// let num;

// num = 1;
// func(); //1

// num = 2;
// func(); //2

//173.1 Локальные переменные в функциях в JavaScript
// function func() {
// 	let num = 5;
// 	return num;
// }

// console.log(num); //not defined

//173.2
// function func() {
// 	let num = 5;
// 	return num;
// }

// console.log(func()); //5

//174.1 Одинаковые имена переменных в функциях в JavaScript
// let num = 1;

// function func() {
// 	num = 2;
// }
// func()

// console.log(num); //2

//174.2
// let num = 1;

// function func() {
// 	let num = 2;
// }
// func(); //2

// console.log(num); //1

//175.1 Изменение глобальных переменных в JavaScript
// let num = 1;

// function func() {
// 	num = 2;
// }
// func();

// console.log(num); //2

//175.2
// let num = 1;

// function func() {
// 	num = 2;
// }

// console.log(num); //1

//175.3
// let num = 1;

// function func() {
// 	let num = 2;
// }
// func();

// console.log(num); //2

//175.4
// let num = 1;

// function func() {
// 	let num = 2;
// }

// console.log(num); //1
// func();

//175.5
// let num = 1;

// function func() {
// 	num = 2;
// }

// console.log(num); //1
// func();

//175.6
// let num = 1;

// function func() {
// 	num++;
// }

// func();
// func();
// func();
// console.log(num); //4

//175.7
// function func() {
// 	num = 2;
// }

// let num = 1;
// console.log(num); //1
// func();

//175.8
// function func() {
// 	num = 2;
// }

// let num = 1;
// func();
// console.log(num); //2

//176.1 Глобальные переменные и параметры функций в JavaScript
// function func(localNum) {
// 	console.log(localNum);
// }

// func(1); //1

//176.2
// function func(localNum) {
// 	console.log(localNum);
// }

// let num = 1;
// func(num); //1

//176.3
// function func(localNum) {
// 	console.log(localNum);
// }

// let num = 1;
// func(num); //1
// num = 2;

//176.4
// let num = 1;

// function func(localNum) {
// 	console.log(localNum);
// }

// num = 2;
// func(num); //2

//176.5
// function func(localNum) {
// 	localNum = 2;
// }

// let num = 1;
// func(num);
// console.log(num); //1

//176.6
// function func(localNum) {
// 	num = 2;
// }

// let num = 1;
// func(num);
// console.log(num); //2

//176.7
// function func(localNum) {
// 	let num = 2;
// }

// let num = 1;
// func(num);
// console.log(num); //1

//177.1 Совпадение имен с параметрами в JavaScript
// function func(num) {
// 	num = 2;
// }

// let num = 1;
// func(num);
// console.log(num); //1

//177.2
// function func() {
// 	num = 2;
// }

// let num = 1;
// func();
// console.log(num); //1

//177.3
// function func() {
// 	let num = 2;
// }

// let num = 1;
// func();
// console.log(num); //1

//178.1 Параметры-объекты JavaScript
// function func(obj) {
// 	obj.a = '!';
// }

// let obj = { a: 1, b: 2, c: 3 };
// func(obj);
// console.log(obj); //

//178.2
// function func(arg) {
// 	arg = '!';
// }

// let obj = { a: 1, b: 2, c: 3 };
// func(obj.a);
// console.log(obj); //bez izmen

//178.3
// function func(obj) {
// 	obj = '!';
// }

// let obj = { a: 1, b: 2, c: 3 };
// func(obj.a);
// console.log(obj); //bez izmen

//178.4
// function func(arr) {
// 	arr.splice(1, 1);
// }

// let arr = [1, 2, 3];
// func(arr);
// console.log(arr); //1,,3

//178.5
// function func(arr) {
// 	arr.slice(1, 1);
// }

// let arr = [1, 2, 3];
// func(arr);
// console.log(arr); //1,3

//178.6
// function func(arr) {
// 	let newArr = arr;
// 	newArr[0] = '!';
// }

// let arr = [1, 2, 3];
// func(arr);
// console.log(arr); //izmena

//179.1 Исходный код функции и ее результат в JavaScript
// function func() {
// 	return '!';
// }
// console.log(func);

//180.1 Функция как переменная в JavaScript
// function func() {
// 	return 'Temirlan';
// }
// console.log(func());

//180.2
// function func() {
// 	return 'Temirlan';
// }
// console.log(func());

//180.3
// function func() {
// 	return 'Temirlan';
// }
// console.log(func);

//180.4
// function func() {
// 	return '!';
// }
// console.log(func());
// func = 123;
// console.log(func);

//180.5
// function func1() {
//     return 3;
// }

//180.6
// function func1() {
// 	return 3;
// }
// let func2 = func1;
// console.log(func2());

//180.7
// function func1() {
// 	return 3;
// }
// let func2 = func1;
// console.log(func1() + func2());

//180.8
// let func1 = function() {
// 	return 1;
// };
// console.log(func1());

//180.9
// let func2 = function() {
// 	return 2;
// };
// console.log(func2());

//180.10
// let func1 = function() {
// 	return 1;
// };

// let func2 = function() {
// 	return 2;
// };

// alert(func1() + func2());

//181.1 Function expression и Function declaration в JavaScript
//Function Declaration - обьявление функции обычным способом
//Function Expression - функциональное выражение тобиш создание безымянной функции с последующим присвоением в переменную

// function func() {
// 	console.log('!');
// } //Function Declaration

//let func = function() {
//	console.log('!');
//} //Function Expression

//Оба способа объявления функции эквивалентны, но есть существенная разница: функции, объявленные как Function Declaration, будут доступны, даже если обратится к ним до того, как они были объявлены.

//А функциональные выражения создаются в момент выполнения кода и недоступны выше. Поэтому такой код выдаст ошибку:

// console.log(func());

// function func() {
// 	return '!';
// }

// func();

// let func = function () {
// 	return '!';
// };

//181.5
// let func1 = function () {
// 	console.log('!');
// };
// let func2 = function () {
// 	console.log('!');
// };

// function func3() {
// 	console.log('!');
// }

//182.1 Нюансы функциональных выражений в JavaScript
// function func() {
// 	console.log('!');
// } //Function Declaration

//182.2
// let func = function() {
// 	console.log('!');
// } //F E

//182.3
// +function() {
// 	console.log('!');
// } //F E

//182.4
// //!function func() {
// 	console.log('!');
// } //F E

//182.5
// -function func() {
// 	console.log('!');
// } //F E

//182.6
// 1 +
// 	function func() {
// 		console.log('!');
// 	}; //F D

//182.7
// (function func() {
// 	console.log('!');
// }) //F D

//182.8
// console.log(
// 	function() {
// 		console.log('!');
// 	}
// ); //F E

//182.9
// let test = function func() {
// 	console.log('!');
// } //F E

//182.10
// console.log(function func() {
// 	console.log('!');
// }); //F E

//182.11
// console.log(func()) +
// 	function func() {
// 		console.log('!');
// 	}; //F E

//182.12
// function func() {
// 	console.log('!');
// } // F D

//182/13
// -function func() {
// 	console.log('!');
// }; //F E

//182.14
// -1;
// function func() {
// 	console.log('!');
// } //F D

//182.15
// -1
// function func() {
// 	console.log('!');
// } //F D

//182.16
// 1;
// function func() {
// 	console.log('!');
// } // F D

//182.17
// -1-
// function func() {
// 	console.log('!');
// } //F E

//182.18
// function func() {
// 	console.log('!');
// }
// +1; //F D

//182.19
// function func() {
// 	console.log('!');
// }
// +1; //FD

//182/20
// +function func() {
// 	console.log('!');
// } + 1; //F E

//182.21
// +
// function func() {
// 	console.log('!');
// } + 1;// F E

//182/22
// +1;
// function func() {
// 	console.log('!');
// }
// +1; //F D

//182/23
// function func() {
// 	console.log('!');
// }
// +console.log('!'); //F D

//183/1 Массив с анонимными функциями в JavaScript
// let arr = [
// 	function () {
// 		return 1;
// 	},
// 	function () {
// 		return 2;
// 	},
// 	function () {
// 		return 3;
// 	},
// ];
// console.log(arr[0](), arr[1](), arr[2]());

//183.2
// let arr = [
// 	function () {
// 		return 1;
// 	},
// 	function () {
// 		return 2;
// 	},
// 	function () {
// 		return 3;
// 	},
// ];
// console.log(arr[2]());

//183/3
// let arr = [
// 	function () {
// 		return 1;
// 	},
// 	function () {
// 		return 2;
// 	},
// 	function () {
// 		return 3;
// 	},
// ];
// console.log(arr[0]() + arr[1]() + arr[2]());

//183.4
// let arr = [
// 	function () {
// 		return 1;
// 	},
// 	function () {
// 		return 2;
// 	},
// 	function () {
// 		return 3;
// 	},
// ];
// for (let func of arr) {
// 	console.log(func());
// }

//184/1 Объект с анонимными функциями в JavaScript
// let obj = {
// 	func1: function () {
// 		return 1;
// 	},
// 	func2: function () {
// 		return 2;
// 	},
// 	func3: function () {
// 		return 3;
// 	},
// };
// console.log(obj.func1() + obj.func2() + obj.func3());

//184.2
// let obj = {
// 	func1: function () {
// 		return 1;
// 	},
// 	func2: function () {
// 		return 2;
// 	},
// 	func3: function () {
// 		return 3;
// 	},
// };

// for (let key in obj) {
// 	console.log(key + ':' + obj[key]);
// }

//184.3
// let math = {
// 	func1: function (arr) {
// 		let sum = 0;
// 		for (let elem of arr) {
// 			sum += elem;
// 		}
// 		return sum;
// 	},
// 	func2: function (arr) {
// 		let sum = 0;

// 		for (let i = 0; i < arr.length; i++) {
// 			let res = arr[i] * arr[i];
// 			sum += res;
// 		}
// 		return sum;
// 	},
// 	func3: function (arr) {
// 		let sum = 0;

// 		for (let i = 0; i < arr.length; i++) {
// 			let res = arr[i] * arr[i] * arr[i];
// 			sum += res;
// 		}
// 		return sum;
// 	},
// };
// console.log(math.func1([12, 41, 2]));
// console.log(math.func2([123, 415, 21]));
// console.log(math.func3([21, 3, 9]));

//185.1 Передача функций параметрами в JavaScript
// test(
// 	function () {
// 		return 1;
// 	},
// 	function () {
// 		return 2;
// 	},
// 	function () {
// 		return 3;
// 	}
// );

// function test(func1, func2, func3) {
// 	console.log(func1() + func2() + func3());
// }

//185.2
// let get1 = function () {
// 	return 55;
// };
// let get2 = function () {
// 	return 15;
// };
// let get3 = function () {
// 	return 12;
// };

// test(get1, get2, get3);

// function test(func1, func2, func3) {
// 	console.log(func1() + func2() + func3());
// }

//185.3
// function func1() {
// 	return 1;
// }
// function func2() {
// 	return 2;
// }
// function func3() {
// 	return 3;
// }

// test(func1, func2, func3);

// function test(func1, func2, func3) {
// 	console.log(func1() + func2() + func3());
// }

//185.4
// let func1 = function () {
// 	return 1;
// };
// let func2 = function () {
// 	return 2;
// };
// let func3 = function () {
// 	return 3;
// };

// test(func1, func2, func3);

// function test(func1, func2, func3) {
// 	console.log(func1() + func2() + func3());
// }

//185.5
// test(function (num) {
// 	return num * num * num;
// });

// function test(func) {
// 	console.log(func(3));
// }

//185.6
// function func(num) {
// 	return num * num * num;
// }

// function func(func) {
// 	console.log(func(3));
// }

//185.7
// let func = test(function (num) {
// 	return num * num * num;
// });

// function test(func) {
// 	console.log(func(3));
// }

//185.8 Ne resheno
//Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму. При вызове передаваемой функции внутри test передайте в передаваемую функцию число 2 и число 3. Выведите алертом результат.Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму. При вызове передаваемой функции внутри test передайте в передаваемую функцию число 2 и число 3. Выведите алертом результат.
// test(function (num) {
// 	return num + num;
// });

// function test(func) {
// 	alert(func(2), func(3));
// }

//185.9 Ту куырутщ
// function test(num, func1, func2) {
// 	return func1(num) + func2(num);
// }

// test(
// 	3,
// 	function (num) {
// 		console.log(num * num);
// 	},
// 	function (num) {
// 		console.log(num * num * num);
// 	}
// );

//185.10
// function test(arr, func) {
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] = func(arr[i]);
// 	}
// 	return arr;
// }

// let result = test([1, 2, 3], function (num) {
// 	return num * num;
// });
// console.log(result);

//185.11
// function test(arr, func) {
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] = func(arr[i]);
// 	}
// 	return arr;
// }

// let result = test([1, 2, 3], function (num) {
// 	return num * num * num;
// });
// console.log(result);

//186.1 Именованные функциональные выражения в JavaScript

//187.1 Вложенные функции в JavaScript Ne resheno
//Сделайте функцию func, которая параметрами будет принимать два числа, а возвращать сумму квадрата первого числа с кубом второго числа. Сделайте для этого вспомогательную функцию square, возводящую число в квадрат, и вспомогательную функцию cube, возводящую число в куб

// function func(num1, num2) {
// 	return square() + cube();
// }
// function square(num1) {
// 	return num1 * num1;
// }
// function cube(num2) {
// 	return num2 * num2 * num2;
// }
// console.log(func(31), func(2));

//188.1 Область видимости вложенных функций в JavaScript
// function test() {
// 	let num = 1;

// 	function func() {
// 		console.log(num);
// 	}

// 	func();
// }

// test(); //1

//188.2
// function test() {
// 	let num = 1;

// 	function func() {
// 		console.log(num);
// 	}
// }

// test();

//188.3
// function test() {
// 	let num = 1;

// 	function func() {
// 		console.log(num);
// 	}

// 	func();
// }

//188.4
// function test() {
// 	let num;

// 	function func() {
// 		console.log(num);
// 	}

// 	num = 1;
// 	func();

// 	num = 2;
// 	func();
// }

// test(); //2

//188.5
// function test(num1, num2) {
// 	function func() {
// 		console.log(num1 + num2);
// 	}

// 	func();
// }

// test(1, 2); //3

//188.6
// function test(num1, num2) {
// 	function func() {
// 		console.log(num1 + num2);
// 	}

// 	num1 = 2;
// 	func();
// }

// test(1, 2); //4

//189.1
// function func1() {
// 	return function () {
// 		return 1;
// 	};
// }
// function func2() {
// 	return function () {
// 		return 2;
// 	};
// }
// console.log(func1()() + func2()());

//189.2
// function func() {
// 	return function () {
// 		return function () {
// 			return function () {
// 				return function () {
// 					return '!';
// 				};
// 			};
// 		};
// 	};
// }
// console.log(func()()()()());

//189.3
// function func(num1) {
// 	return function (num2) {
// 		return function (num3) {
// 			return num1 + num2 + num3;
// 		};
// 	};
// }
// console.log(func(2)(3)(4));

//189.4 Ne resheno
// function func(num1) {
// 	var newArr = [];
// 	return function (num2) {
// 		return function (num3) {
// 			return function (num4) {
// 				return function (arr) {
// 					newArr.push(num1, num2, num3, num4);
// 				};
// 			};
// 		};
// 	};
// }
// console.log(func(2)(3)(4)(5)());

//190.1 Лексическое окружение функций в JavaScript
// function test() {
// 	let num1 = 1;
// 	let num2 = 2;

// 	return function () {
// 		return num1 + num2;
// 	};
// }

// let func = test();
// console.log(func()); //3

//190.2
// function test() {
// 	let num1 = 1;
// 	let num2 = 2;

// 	return function () {
// 		return num1 + num2;
// 	};
// }

// console.log(test()()); //3

//190.3
// function test() {
// 	let num1 = 1;

// 	return function () {
// 		return num1 + num2;
// 	};
// }

// let num2 = 2;
// let func = test();
// console.log(func()); //3

//190.4
// function test() {
// 	let num = 1;

// 	return function () {
// 		return num;
// 	};
// }

// let num = 2;
// let func = test();
// console.log(func()); //2

//191.1 Замыкания в JavaScript
// function test() {
// 	let num = 0;
// 	return function () {
// 		console.log(num);
// 		num++;
// 	};
// }
// let func = test();
// func();
// func();

//191.2
// function test() {
// 	let num = 10;
// 	return function () {
// 		console.log(num);
// 		num--;
// 	};
// }
// let func = test();
// func();

//191.3
// function test() {
// 	let num = 10;
// 	return function () {
// 		if (num >= 0) {
// 			console.log(num);
// 			num--;
// 		} else {
// 			console.log('OVer');
// 		}
// 	};
// }
// let func = test();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();

//191.4
// function func() {
// 	let num = 0;

// 	return function () {
// 		console.log(num);
// 		num++;
// 	};
// }

// func()(); //0
// func()(); //0
// func()(); //0

//191.5
// function func() {
// 	let num = 0;

// 	return function () {
// 		console.log(num);
// 		num++;
// 	};
// }

// let test = func;

// test()(); //0
// test()(); //0
// test()(); //0

//191.6
// let counter = 0;

// function test() {
// 	return function () {
// 		console.log(counter);
// 		counter++;
// 	};
// }

// let func = test;

// let func1 = func();
// let func2 = func();
// func1(); //0
// func2(); //1
// func1(); //2
// func2(); //3

//191/7
// function test() {
// 	let counter = 0;

// 	return function () {
// 		return function () {
// 			console.log(counter);
// 			counter++;
// 		};
// 	};
// }

// let func = test()();

// let func1 = func;
// let func2 = func;
// func1();
// func2();
// func1();
// func2();

//191.8
// function test() {
// 	let counter = 0;

// 	return function () {
// 		return function () {
// 			console.log(counter);
// 			counter++;
// 		};
// 	};
// }

// let func = test();

// let func1 = func();
// let func2 = func();
// func1(); //0
// func2(); //1
// func1(); //2
// func2(); //3

//192/1 Вызов функции на месте в JavaScript
// !(function () {
// 	console.log('!');
// })(); //!

//192.2
// function() {
// 	console.log('!');
// }(); //error

//192.3
// let result = (function () {
// 	return '!';
// })();

// console.log(result); //!

//192.4
// let result = function () {
// 	return '!';
// };

// console.log(result); //structure

//192.5
// let result = function () {
// 	return '!';
// };

// console.log(result()); //!

//192.6
// let result =
// 	(function () {
// 		return 1;
// 	})() +
// 	(function () {
// 		return 2;
// 	})();
// console.log(result); //3

//192.7
// let result = (function () {
// 	return '!';
// })();

// console.log(result); //!

//192.8
// let result = (function () {
// 	return '!';
// })();

// console.log(result); //!

//192.9
// let result = function () {
// 	return '!';
// };

// console.log(result); //structure

//192.10
// let result = function () {
// 	return '!';
// };

// console.log(result()); //!

//192.11
// (function (num1, num2) {
// 	console.log(num1 + num2);
// })(1, 2); //3

//192.12
// (function () {
// 	return function () {
// 		return function () {
// 			console.log('!');
// 		};
// 	};
// })()()();

//192.13
// (function (num1) {
// 	return function (num2) {
// 		console.log(num1 + num2);
// 	};
// })(1)(2);

//192.14
// (function (num1) {
// 	return function (num2) {
// 		return function (num3) {
// 			console.log(num1 + num2 + num3);
// 		};
// 	};
// })(1)(2)(3);

//192.15
// let str = 'str';

// (function () {
// 	console.log(1);
// })(); //1

//192.16
// let str = 'str'(function () {
// 	console.log(1);
// })(); //error

//193.1 Замыкания и вызов функции на месте в JavaScript
// let func = (function () {
// 	let num = 0;

// 	return function () {
// 		console.log(num);
// 		num++;
// 	};
// })();
// func();
// func();

//193.2
// let func = (function () {
// 	let num = 1;
// 	let num2 = 1;
// 	return function () {
// 		if (num <= 5) {
// 			console.log(num);
// 			num++;
// 		} else {
// 			console.log(num2);
// 			num2++;
// 		}
// 	};
// })();

// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();

//194.1 Функции-коллбэки в JavaScript
// function each(arr, callback) {
// 	let result = [];

// 	for (let elem of arr) {
// 		result.push(callback(elem));
// 	}
// 	return result;
// }
// let result = each([1, 2, 3, 4, 5], function (num) {
// 	return num ** 2;
// });
// console.log(result);

// 194.2;
// function each(arr, callback) {
// 	let result = [];

// 	for (let elem of arr) {
// 		result.push(callback(elem));
// 	}
// 	return result;
// }
// let result = each(['temirlan', 'Baisultan', 'Aman'], function (arr) {
// 	let str = String(arr).split('').reverse().join(' ');
// 	return str;
// });
// console.log(result);

//194.3
// function each(arr, callback) {
// 	let result = [];

// 	for (let elem of arr) {
// 		result.push(callback(elem));
// 	}
// 	return result;
// }
// let result = each(['temirlan', 'baisultan', 'aman', 'aiperi'], function (arr) {
// 	let str = String(arr).slice(0);
// 	let res = str[0].toUpperCase() + str.slice(1);
// 	return res;
// });
// console.log(result);

//195,1 Стрелочные функции в JavaScript
// let result = every([1, 2, 3, 4, 5], (elem) => elem > 0);

//195.2
// let result = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10);

//195.3
// let arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];

// let result = each(arr, (elem, index) => elem * index > 10);
// console.log(result);

//196.1 Работа с рекурсией в JavaScript
// let arr = [1, 2, 3, 4, 5];

// function func(arr) {
// 	console.log(arr.shift(), arr);

// 	if (arr.length != 0) {
// 		func(arr);
// 	}
// }
// console.log(func(arr));

//196.2 Сумма элементов массива
// let arr = [1, 2, 3, 4, 5];

// function getSum(arr) {
// 	let sum = arr.shift();

// 	if (arr.length !== 0) {
// 		sum += getSum(arr);
// 	}
// 	return sum;
// }
// console.log(getSum(arr));

//197.1 Рекурсия и многомерные структуры в JavaScript X
//197.2 X
//197.3 X

//197.4 Сумма элементов массива X
// function squareFunc(arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			elem = squareFunc(elem);
// 		} else {
// 			elem ** 3;
// 		}
// 	}
// 	return arr;
// }
// console.log(squareFunc([1, [2, 7, 8], [3, 4], [5, [6, 7]]]));

//198.1 Метод map для перебора массива в JavaScript
// let arr = [1, 2, 3, 4, 5];

// let result = arr.map(function (arr) {
// 	let newArr = [];
// 	newArr.push(Math.sqrt(arr));
// 	return newArr;
// });
// console.log(result);

//198/2
// let arr = ['Temirlan', 'Baisultan', 'Aman'];

// let result = arr.map(function (arr) {
// 	return arr + '!';
// });
// console.log(result);

//198/3
// let arr = ['Temirlan', 'Baisultan', 'Aman'];

// let result = arr.map(function (arr) {
// 	let str = String(arr).split('').reverse().join(' ');
// 	return str;
// });
// console.log(result);

//198.4
// let arr = ['123', '456', '789'];
// let result = arr.map(function (arr) {
// 	let str = String(arr).split('').map(Number);
// 	return str;
// });
// console.log(result);

//198.5 Ключ элемента
// let arr = [21, 415, 25, 616, 777];

// let result = arr.map(function (elem, index) {
// 	return elem * index;
// });
// console.log(result);

//198.6  Перебор многомерных массивов
// let arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];
// let result = arr.map(function (elem) {
// 	return elem.map(function (num) {
// 		return num * num;
// 	});
// });
// console.log(result);

//199.1 Метод forEach для перебора массива в JavaScript
// let arr = ['a', 'b', 'c', 'd', 'e'];

// arr.forEach(function (elem, index) {
// 	document.write(index + '-' + elem + '<br>');
// });

//199.2 Применение forEach
// let arr = [12, 64, 86, 642];
// let sum = 0;
// arr.forEach(function (elem) {
// 	let res = elem * elem;
// 	sum += res;
// 	console.log(res);
// });
// console.log(sum);

//200.1 Метод filter для фильтрации массива в JavaScript
// let arr = [1, 2, 3, 5, 6, 7];
// let result = arr.filter(function (elem) {
// 	if (elem % 2 == 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// console.log(result);

// let arr = [1, 2, 3, 5, 6, 7];
// let result = arr.filter(function (elem) {
// 	return elem % 2 == 0;
// });
// console.log(result);

// let arr = [1, 2, 3, 5, 6, 7]
// let result = arr.filter((elem) => elem % 2 == 0);
// console.log(result);

//200.1
// let arr = [-12, -1, 2, 3, -4, 5];
// console.log(arr.filter((elem) => elem >= 0));

//200.2
// let arr = [-12, -1, 2, 3, -4, 5];
// console.log(arr.filter((elem) => elem < 0));

//200.3
// let arr = [-12, -1, 2, 3, -4, 5];
// console.log(arr.filter((elem) => elem > 0 && elem < 10));

//200.4
// let arr = ['Temirlan', 'Mr.Olimpia', ' God'];
// console.log(arr.filter((elem) => elem.length < 5));

//200.5
// let arr = [77, 13, 666, 23, 1];
// let result = arr.filter((arr, index) => {
// 	return arr * (index + 1) < 30;
// });
// console.log(result);

//200.6
// let arr = [[1, 2], [3, 4], 5, [6, 7]];
// let result = arr.filter((elem) => {
// 	return elem.splice(' ');
// });
// console.log(result);

//200.7
// let arr = [-1, 74, 124, -47];
// let result = arr.filter((elem) => elem < 0);
// console.log(result.length);

//201.1 Метод every для проверки массива в JavaScript
// let arr = [2, 4, 6, 8];

// let result = arr.every((elem) => elem > 0);
// console.log(result);

//201.2
// let arr = [2, 4, 6, 8];

// let result = arr.every((arr, index) => {
// 	return arr * (index + 1) < 30;
// });
// console.log(result);

//202.1 Метод some для проверки массива в JavaScript
// let arr = [2, 4, 6, 8];

// let result = arr.some((elem) => elem > 0);
// console.log(result);

//202.2
// let arr = [2, 4, 6, 8];

// let result = arr.some((arr, index) => {
// 	return arr * (index + 1) > 30;
// });
// console.log(result);

//203.1 Оператор spread в JavaScript
// function func(num1, num2, num3, num4, num5) {
// 	return num1 + num2 + num3 + num4 + num5;
// }
// console.log(func(...[1, 2, 3, 4, 5]));

//203.2
// function func(n1, n2, n3, n4, n5, n6, n7, n8) {
// 	return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
// }

// console.log(func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8])); //260
//203.3
// let arr = [1, 2, 3, 4, 5];
// let min = Math.min(...arr);
// console.log(min);

//204.1 Оператор spread и слияние массивов
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr = ['a', ...arr1, 'b', 'c', ...arr2];
// console.log(arr); // 123 456

//204.2
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr = ['a', ...arr1, ...arr1, 'b', 'c'];
// console.log(arr); //123 123

//204.3
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5, 6];

// let arr = ['a', 'b', 'c', ...arr2];
// console.log(arr); //a b c 123 456

//204.4
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5, 6];
// let arr3 = [...arr2, 7, 8, 9];

// let arr = [0, ...arr3];
// console.log(arr); //0 123 456 789

//204.5
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];

// console.log(arr2); //123

//205.1  Оператор spread для строк и чисел в JavaScript
// let arr = [...'12345'];
// console.log(arr); //1 2 3 4 5

//205.2
// let arr = ['a', ...'12345'];
// console.log(arr); // a 1 2 3 4 5

//205.3
// let arr = [...'12345', ...'56789'];
// console.log(arr); //1 2 3 4 5 5 6 7 8 9

//205.4
// let arr1 = ['a', 'b', 'c'];
// let arr2 = [...arr1, ...'12345'];

// console.log(arr2); //a b c 1 2 3  4 5

//206.1 Оператор rest в JavaScript
// func(1, 2, 4, 5, 7);

// function func(...rest) {
// 	console.log(rest);
// }

//207.1 Применение операторов rest и spread в JavaScript
// Функция, находящая сумму чисел
// function func(...nums) {
// 	let sum = 0;

// 	for (let num of nums) {
// 		sum += num / nums.length;
// 	}
// 	return sum;
// }
// let result = func(1, 2, 3, 4, 5);
// console.log(result);

//Функция, сливающая массивы в двухмерный
// let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// console.log(result);

// function unite(...arrs) {
// 	return arrs;
// }

//Функция, сливающая массивы в один
// merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);

// function merge(...arrs) {
// 	return [].concat(...arrs);
// }
// let result = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// console.log(result);

//208.1 Деструктуризация массивов в JavaScript
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name, surname, departament, position, salary] = arr;
// console.log(name);

//209.1 Деструктуризация массива из функции в JavaScript
// function func() {
// 	return ['John', 'Smit', 'development', 'programmer', 2000];
// }

// let [name, surname, departament, position, salary] = func();

// console.log(func(surname));

//210.1 Пропуск элементов массива при деструктуризации в JavaScript
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [, , departament, position, ,] = arr;
// console.log(departament);
// console.log(position);

//211.1 Лишние значения при деструктуризации массива в JavaScript
// let arr = [2024, 12];
// let [year, month, day, time] = arr;
// console.log(year);
// console.log(time);

//212.1 Остаток массива при деструктуризации в JavaScript
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name, surname, ...ost] = arr;

// let info = arr.slice(2); // все элементы со второго до конца массива
// console.log(info);

//213.1 Значения по умолчанию при деструктуризации массива в JavaScript
// let arr = ['John', 'Smit', 'development', 'programmer'];
// let [name, surname, departament] = arr;

// let position;
// if (arr[3] !== undefined) {
// 	position = arr[3];
// } else {
// 	position = 'trainee';
// }
// console.log(position);

//214.1 Функции по умолчанию при деструктуризации массива в JavaScript
// let arr = [7, 3];

// function func() {
// 	return new Date().getDate();
// }

// let [year, month, day = func()] = arr;
// if (year !== undefined) {
// 	year = '2023';
// } else if (month !== undefined) {
// 	month = '03';
// }
// console.log(year);
// console.log(day);
// console.log(month);

//215.1 Объявление переменных при деструктуризации массива в JavaScript
// let arr = [2023, 03, 07];
// let year;
// let month;
// let day;

// [year, month, day] = arr;
// console.log(year, day, month);

//216,1 Деструктуризация объектов в JavaScript
// let options = {
// 	color: 'red',
// 	width: 400,
// 	height: 500,
// };
// let { color, width, height } = options;
// console.log(color, width, height);

//217,1 Имена переменных при деструктуризации объектов в JavaScript
// let options = {
// 	color: 'red',
// 	width: 400,
// 	height: 500,
// };
// let { color: c, width: w, height: h } = options;
// console.log(c, w, h);

//218.1 Значения по умолчанию при деструктуризации объектов в JavaScript
// let options = {
// 	width: 400,
// 	height: 500,
// };

// let color;
// if (options.color !== undefined) {
// 	color = options.color;
// } else {
// 	color = 'black';
// }
// let { width: width, height: height } = options;
// console.log(width, height, color);

//219.1 Переменные и значения по умолчанию в JavaScript
// let options = {
// 	width: 400,
// 	height: 500,
// };

// let с;
// if (options.с !== undefined) {
// 	с = options.color;
// } else {
// 	с = 'black';
// }
// let { width: w, height: h } = options;
// console.log(w, h);

//220,1 Объявление переменных при деструктуризации объектов в JavaScript
// let obj = {
// 	year: 2025,
// 	month: 03,
// 	day: 21,
// };
// let year, month, day;
// ({ year, month, day } = obj);
// console.log(day, month);

//221,1 Деструктуризация параметров функций в JavaScript
// function func([name, surname, departament, position, salary]) {
// 	console.log(name);
// 	console.log(salary);
// 	console.log(surname);
// 	console.log(departament);
// 	console.log(position);
// }

// func(['John', 'Smit', 'development', 'programmer', 2000]);

//221.2
// function func([name, surname, info, param4, param5]) {
// 	console.log(name, surname, info, param14, param5);
// }

// func(['John', 'Smit', 'development', 'programmer', 2000]);

//221,3
// function func([name, surname, departament]) {
// 	let position;
// 	if (arr[3] !== undefined) {
// 		position = arr[3];
// 	} else {
// 		position = 'джуниор';
// 	}
// }

// func(['John', 'Smit', 'development']);

//221.4
// function func(department, [name, surname], [year, month, day]) {
// 	console.log(department, name, surname, year, month, day);
// }

// func('development', ['John', 'Smit'], [2018, 12, 31]);

//221.5 Объекты в параметрах
// function func({ color, width, height }) {
// 	console.log(color, width, height);
// }

// func({ color: 'red', width: 400, height: 500 });

//221,6
// function func({ color = 'black', width, height }) {
// 	console.log(width, height, color);
// }
// func({ color: 'red', width: 400, height: 500 });

//222.1 Работа с объектом Date в JavaScript
// let date = new Date();
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());

//223.1 Форматирование даты в JavaScript
// function addZero(num) {
// 	if (num >= 0 && num <= 9) {
// 		return '0' + num;
// 	} else {
// 		return num;
// 	}
// }

// let date = new Date();
// console.log(
// 	date.getHours() +
// 		':' +
// 		date.getMinutes() +
// 		':' +
// 		date.getSeconds() +
// 		' ' +
// 		addZero(date.getDate()) +
// 		'-' +
// 		addZero(date.getMonth() + 1) +
// 		'-' +
// 		addZero(date.getFullYear())
// );

//224.1 Смена формата даты в JavaScript
// let str = '2025-12-31';
// let res = str.split('-').reverse().join('/');
// console.log(res);

//225.1 Получения дня недели на JavaScript
// let date = new Date();
// console.log(date.getDay());

//225.2
// let date = new Date();
// function weekendFunc(num) {
// 	if (num == 6 && num == 0) {
// 		return 'Its a weekend: ' + num;
// 	} else {
// 		return (
// 			'its working day: ' +
// 			date.getFullYear() +
// 			'-' +
// 			addZero(date.getMonth() + 1) +
// 			'-' +
// 			addZero(date.getDate())
// 		);
// 	}
// 	function addZero(num) {
// 		if (num >= 0 && num <= 9) {
// 			return '0' + num;
// 		} else {
// 			return num;
// 		}
// 	}
// }
// console.log(weekendFunc(date.getDay()));

//225.3
// let date = new Date();
// let res = 7 - date.getDay();
// console.log(res);

//226.1 Вывод частей даты словом в JavaScript
// let date = new Date();
// let month = date.getMonth();
// let monthn = [
// 	'янв',
// 	'фев',
// 	'мар',
// 	'апр',
// 	'май',
// 	'июн',
// 	'июл',
// 	'авг',
// 	'сен',
// 	'окт',
// 	'ноя',
// 	'дек',
// ];
// console.log(monthn[month]);

//227,1 Установка времени в объекте Date в JavaScript
// let date = new Date(2003, 6, 4);
// let day = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[day]);

//228.1 Получение времени в формате timestamp в JavaScript
// let date = new Date(2025, 1, 1);
// console.log(date.getTime());

//229.1 Разность между датами в формате timestamp в JavaScript
// let date1 = new Date(2000, 1, 10);
// let date2 = new Date(1988, 3, 1);
// let diff = date1.getTime() - date2.getTime();
// console.log(diff / (1000 * 60 * 60 * 24)); // outpu: 4332

//229.2
// let date1 = new Date();
// let date2 = new Date(2003, 6, 4);
// let diff = date1.getTime() - date2.getTime();
// console.log(diff / (1000 * 60 * 60 * 24 * 31)); // outpu: 231 month

//230.1 Разница между объектами с датой в JavaScript
// let date1 = new Date(2000, 9, 1);
// let date2 = new Date(2010, 2, 15);
// let diff = date1 - date2;
// console.log(diff);

//230.2
// let date1 = new Date(2000, 9, 1);
// let date2 = new Date(2010, 2, 15);
// let diff = date1 - date2;
// console.log(diff / (1000 * 60 * 60 * 24));

//230.3
// let date1 = new Date(2000, 9, 1);
// let date2 = new Date(2010, 2, 15);
// let diff = date1 - date2;
// console.log(diff / (1000 * 60 * 60 * 24 * 31));

//230.4
// let date1 = new Date(2000, 9, 1);
// let date2 = new Date(2010, 2, 15);
// let diff = date1 - date2;
// console.log(diff / (1000 * 60 * 60 * 24 * 31 * 12));

//231.1 Автоматическая корректировка дат в JavaScript
// let date = new Date(2018, 1, 35);
// console.log(date); // 2018 March 7

//231.2
// let date = new Date(2018, 15, 1);
// console.log(date); // Apr 1

//231.3
// let date = new Date(2018, 3, 31);
// console.log(date); // May 1

//231,4
// let date = new Date(2018, 1, 31);
// console.log(date); // 2018 March 3

//231.5
// let date = new Date(2018, 12, 33);
// console.log(date); // 2019 1 2

//231.6
// let date = new Date(2018, 33, 33);
// console.log(date); // 2020 0 2

// //231.7
// let date = new Date(2018, 5, 0);
// console.log(date); // mAY 31

//231.8
// let date = new Date(2018, 0, 0);
// console.log(date); // 2017 11 31

//231.9
// let date = new Date(2018, -12, -33);
// console.log(date); // 2016 nov 28

// 2016 11 29
// let date = new Date(2018, 0, 1, 23, 0, 60);
// console.log(date); // 2019 0 1 23 1 00

//231,11
// let date = new Date(2018, 0, 1, 23, 60, 0);
// console.log(date); // 2018 0 1 24 0 0

//231.12
// let date = new Date(2018, 0, 1, 100, 100, 100);
// console.log(date); // 2018 0 5

//232.1 Нахождение последнего дня месяца в JavaScript Ne resheno
// let month = new Date(2023, 5);

// function lastNum(year, month) {
// 	return month.getDate();
// }

//232,2
// let date = new Date(2025, 6, 0);
// let day = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[day]);

//233.1 Определение високосного года в JavaScript
// function isLeap(year) {
// 	var date = new Date(year, 2, 0);
// 	if (date.getDate() == 29) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(isLeap(2023));

//234.1  Проверка корректности даты в JavaScript
// function checkDate(year, month, day) {
// 	let date = new Date(year, month, day);
// 	if (
// 		date.getFullYear() == year &&
// 		date.getMonth() == month &&
// 		date.getDate() == day
// 	) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(checkDate(2025, 0, 31)); // выведет true
// console.log(checkDate(2025, 0, 32)); // выведет false

//235.1 Получение моментов времени в JavaScript
// let now = new Date();
// let date = new Date(now.getFullYear(), 11, 31);
// console.log(date.getDay());

//235.2 День текущего месяца
// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), 1);
// console.log(date.getDay());

//235.3 День следующего или предыдущего года
// let now = new Date();
// let date = new Date(now.getFullYear() + 1, 11, 31);
// console.log(date.getDay());

//235.4
// let now = new Date();
// let date = new Date(now.getFullYear() + 1, now.getMonth());
// console.log(date.getDay());

//235.5
// let now = new Date();
// let date = new Date(now.getFullYear() - 1, now.getMonth());
// console.log(date.getDay());

//235.6 День следующего или предыдущего месяца
//Получится декабрь прошлго года
// let now = new Date();
// let date = new Date(now.getFullYear(), 0 - 1, 1);
// console.log(date.getDay());

//235.7
// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
// console.log(date.getDay());

//235.8 Разность моментов
// let now = new Date();
// let date1 = new Date(now.getFullYear(), 0, 1);
// let date2 = new Date(now.getFullYear(), 8, 10);
// let res = Math.abs(date1 - date2);
// let result = Math.ceil(res / (1000 * 60 * 60 * 24));
// console.log(result);

//235.9
// let now = new Date();
// let date1 = new Date(now.getFullYear(), now.getMonth(), 20);
// let date2 = new Date(now.getFullYear(), now.getMonth() + 1, 10);
// let res = Math.abs(date1 - date2);
// let result = Math.ceil(res / (1000 * 60 * 60 * 24));
// console.log(result);

//235.10 Момент времени дня
// let now = new Date();
// let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
// let date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
// let res1 = Math.abs(date1 - date2);
// let res2 = Math.ceil(res1 / (1000 * 60 * 60));
// console.log(res2);

//235.11 Начало дня
// let now = new Date();
// let time1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
// let time2 = new Date(
// 	now.getFullYear(),
// 	now.getMonth(),
// 	now.getDate(),
// 	now.getHours()
// );
// let res1 = Math.abs(time1 - time2);
// let res2 = Math.ceil(res1 / (1000 * 60 * 60));
// console.log(res2);

//235.12 Конец дня
// let now = new Date();
// let time2 = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
// let res = Math.abs(time2 - now);
// let result = Math.ceil(res / (1000 * 60 * 60));
// console.log(result);

//235.13 Циклическая проверка
// var now = new Date();
// let sum = 0;

// for (let year = 2000; year <= now.getFullYear(); year++) {
// 	let date = new Date(year, 0, 1);
// 	let week = date.getDay();

// 	if (week == 0 || week == 6) {
// 		sum++;
// 	}
// }
// console.log(sum);

//236.1 Практика на получение моментов времени в JavaScript
// let now = new Date();
// let day1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
// let day2 = new Date();
// let res = Math.abs(day1 - day2);
// let result = Math.ceil(res / 1000);
// console.log(result);

//236.2
// let now = new Date();
// let day2 = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
// console.log(day2);
// let res = Math.abs(now - day2);
// let result = Math.ceil(res / 1000);
// console.log(result);

//236.3
// let now = new Date();
// let day2 = new Date(now.getFullYear(), 11, 31);
// let res = Math.abs(now - day2);
// let result = Math.ceil(res / (1000 * 60 * 60 * 24));
// console.log(result);

//236.4
// let now = new Date();
// let year = now.getFullYear();

// for (let month = 0; month <= 11; month++) {
// 	let date = new Date(year, month, 13);

// 	if (date.getDay() == 5) {
// 		console.log(year + '-' + month + '-' + '13');
// 	}
// }

//236.5
// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
// console.log(date);

//236.6
// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth() + 5, 0);
// let day = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср ', 'чт', ' пт', 'сб'];
// console.log(days[day]);

//236.7
// function isLeap(year) {
// 	let date = new Date(year, 2, 0);

// 	if (date.getDate() == 29) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(isLeap(2020));

//236.8
// function lastVis(year1, year2) {
// 	for (; year1 >= year2; year1--) {
// 		let date = new Date(year1, 2, 0);

// 		if (date.getDate() == 29) {
// 			return date;
// 		}
// 	}
// }
// console.log(lastVis(2023, 2000));

// for (let year = 2023; year >= 2000; year--) {
// 	let date = new Date(year, 2, 0);
// 	if (date.getDate() == 29) {
// 		console.log(date);
// 		break;
// 	}
// }

//236.9
// function lastVis(year1, year2) {
// 	for (; year1 <= year2; year1++) {
// 		let date = new Date(year1, 2, 0);

// 		if (date.getDate() == 29) {
// 			return date;
// 		}
// 	}
// }
// console.log(lastVis(2023, 2040));

// for (let year = 2023; year <= 2040; year++) {
// 	let date = new Date(year, 2, 0);
// 	if (date.getDate() == 29) {
// 		console.log(date);
// 		break;
// 	}
// }

//237.1 Строковое сравнение дат на JavaScript
// let date1 = '2020-11-31';
// let date2 = '2020-12-01';

// function biggerDate(date1, date2) {
// 	if (date1 > date2) {
// 		return date1 + 'bigger';
// 	} else {
// 		return date2 + ' is bigger';
// 	}
// }
// console.log(biggerDate(date1, date2));

//237.2 Дата без года
// let date1 = '09-21';
// let date2 = '09-23';

// function biggerDate(date1, date2) {
// 	if (date1 > date2) {
// 		return date1 + 'bigger';
// 	} else {
// 		return date2 + ' is bigger';
// 	}
// }
// console.log(biggerDate(date1, date2));

//237.3 Попадание даты в промежуток
// let date = '05-04';

// if (date >= '02-21' && date <= '03-19') {
// 	console.log('overn');
// } else if (date >= '03-20' && date <= '04-20') {
// 	console.log('telec');
// } else if (date >= '04-21' && date <= '05-20') {
// 	console.log('bliznec');
// } else if (date >= '05-21' && date <= '06-22') {
// 	console.log('rak');
// } else if (date >= '06-23' && date <= '07-22') {
// 	console.log('lev');
// } else if (date >= '07-23' && date <= '08-22') {
// 	console.log('deva');
// } else if (date >= '08-23' && date <= '09-22') {
// 	console.log('rvesy');
// } else if (date >= '09-22' && date <= '10-21') {
// 	console.log('scorpion');
// } else if (date >= '10-22' && date <= '11-21') {
// 	console.log('strelec');
// } else if (date >= '11-22' && date <= '00-19') {
// 	console.log('kozerog');
// } else if (date >= '00-20' && date <= '01-18') {
// 	console.log('vodoley');
// } else if (date >= '01-19' && date <= '02-20') {
// 	console.log('fish');
// }

//238.1 Сравнение объектов с датами в JavaScript
// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0);

// function polMonth(date1, date2) {
// 	if (date1 >= date2) {
// 		return 'Полдень уже был ';
// 	} else {
// 		return 'Полдень еще не был';
// 	}
// }
// console.log(polMonth(now, date));

//238.2
// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), 15);

// function polMonth(date1, date2) {
// 	if (date1 >= date2) {
// 		return 'Прошла половина месяца ';
// 	} else {
// 		return 'Половина месяца еще не прошла';
// 	}
// }
// console.log(polMonth(now, date));

//239.1 Основы работы с DOM в JavaScript
//240.1 DOM элементы в JavaScript
//241.1 Получение DOM элемента в JavaScript
// let button = document.querySelector('#button');
// console.log(button);

// let id1 = document.querySelector('#elem1');
// console.log(id1);
// let id2 = document.querySelector('#elem2');
// console.log(id2);
// let id3 = document.querySelector('#elem3');
// console.log(id3);

//241.2
// let elem = document.querySelector('#block p');
// console.log(elem);

//241.3
// let elem = document.querySelector('.block p');
// console.log(elem);

//241.4
// let elem = document.querySelector('.www');
// console.log(elem);

//242.1 Привязывание обработчиков к элементам в JavaScript
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let button3 = document.querySelector('#button3');

// button1.addEventListener('click', function () {
// 	console.log(1);
// });
// button2.addEventListener('click', function () {
// 	console.log(2);
// });
// button3.addEventListener('click', function () {
// 	console.log(3);
// });

//243.1 Именованные обработчики событий в JavaScript
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// button1.addEventListener('click', func1);
// button2.addEventListener('click', func2);

// function func1() {
// 	console.log(1);
// }

// function func2() {
// 	console.log(2);
// }

//244.1 Один обработчик ко многим элементам в JavaScript'
// let elem1 = document.querySelector('#elem1');
// elem1.addEventListener('click', func);
// let elem2 = document.querySelector('#elem2');
// elem2.addEventListener('click', func);
// let elem3 = document.querySelector('#elem3');
// elem3.addEventListener('click', func);
// let elem4 = document.querySelector('#elem4');
// elem4.addEventListener('click', func);
// let elem5 = document.querySelector('#elem5');
// elem5.addEventListener('click', func);

// function func() {
// 	console.log('message');
// }

//245.1 Несколько обработчиков одного события в JavaScript
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', func1);
// elem.addEventListener('click', func2);
// elem.addEventListener('click', func3);

// function func1() {
// 	console.log('1');
// }

// function func2() {
// 	console.log('2');
// }

// function func3() {
// 	console.log('3');
// }

//246.1 Обработчики разных событий в JavaScript
// let button = document.querySelector('#button');

// button.addEventListener('dblclick', func);
// button.addEventListener('mouseover', func2);

// function func() {
// 	console.log('Hello world!');
// }
// function func2() {
// 	console.log('Ohayo senpai!');
// }

//246.2
// let button = document.querySelector('#button');
// button.addEventListener('mouseover', func2);

// function func2() {
// 	console.log('Ohayo senpai!');
// }

//246.3
// let button = document.querySelector('#button');
// button.addEventListener('mouseout', func2);

// function func2() {
// 	console.log('Sayonara senpai!');
// }

//246.4
// let button = document.querySelector('#button');

// button.addEventListener('mouseover', func);
// button.addEventListener('mouseout', func2);

// function func() {
// 	console.log('Ohayo senpai!');
// }
// function func2() {
// 	console.log('Sayonara senpai!');
// }

//247.1 Работа с текстом элементов на JavaScript
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');

// button.addEventListener('click', func);
// function func() {
// 	console.log(elem.textContent);
// }

//247.2
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');

// button.addEventListener('click', func);
// function func() {
// 	console.log((elem.textContent = 'Izmenen text lox'));
// }

//247.3
// let button = document.querySelector('#button');
// var elem1 = document.querySelector('#elem1');
// var elem2 = document.querySelector('#elem2');

// button.addEventListener('click', func);
// function func() {
// 	let res = +elem1.textContent + +elem2.textContent;
// 	console.log(res);
// }

//247.4
// let button = document.querySelector('#button');
// let div = document.querySelector('#div');
// var elem1 = document.querySelector('#elem1');
// var elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');

// button.addEventListener('click', func);
// function func() {
// 	let res = +elem1.textContent + +elem2.textContent + +elem3.textContent;
// 	div.textContent = res;
// }

//247.5
// let btm = document.querySelector('#button');
// let elem = document.querySelector('#elem');

// btm.addEventListener('click', func);
// btm.addEventListener('dblclick', func2);
// function func() {
// 	let res = elem.textContent + 1;
// 	elem.textContent = res;
// }
// function func2() {
// 	elem.textContent = 25;
// }

//247.6
// let btm = document.querySelector('#button');
// let elem = document.querySelector('#elem');

// btm.addEventListener('click', func);
// function func() {
// 	let res = elem.textContent + ' !';
// 	elem.textContent = res;
// }

//248.1 Работа с HTML кодом элементов на JavaScript
// let btm = document.querySelector('#button');
// let elem = document.querySelector('#elem');

// btm.addEventListener('click', func);
// function func() {
// 	let res = elem.innerHTML;
// 	console.log(res);
// }

//248.2
// let btm = document.querySelector('#button');
// let elem = document.querySelector('#elem');

// btm.addEventListener('click', func);
// function func() {
// 	elem.innerHTML = '<b>New Text in bold skin</b>';
// }

//249.1 Атрибуты тегов как свойства в JavaScript
// let btm = document.querySelector('#button');
// let elem = document.querySelector('#elem');

// btm.addEventListener('click', func);
// function func() {
// 	console.log(elem.type);
// }

//249.2
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', func);

// function func() {
// 	elem.type = 'submit';
// 	console.log(elem);
// }

//249.3
// let btm = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// let href = document.querySelector('#href');

// btm.addEventListener('click', func);
// function func() {
// 	elem.textContent = href.textContent;
// }

//249.4
// let btm = document.querySelector('#button');
// let href = document.querySelector('#href');

// btm.addEventListener('click', func);
// function func() {
// 	let res = href.id;
// 	href.textContent = href.innerHTML + ' ' + '(' + res + ')';
// }

//249/5
// let btm = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// let img = document.querySelector('#img');

// btm.addEventListener('click', func);
// function func() {
// 	elem.textContent = elem.textContent + ' ' + img.src;
// }

//249.6
// let btm = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// let img = document.querySelector('#img');

// btm.addEventListener('click', func);
// function func() {
// 	img.width = 300;
// }

//249.7
// let btm = document.querySelector('#button');
// let img = document.querySelector('#img');

// console.log(img.width);

// btm.addEventListener('click', func);
// function func() {
// 	img.width = img.width * 2;
// }

//249.8
// let btm1 = document.querySelector('#button1');
// let btm2 = document.querySelector('#button2');
// let img1 = document.querySelector('#img1');
// let img2 = document.querySelector('#img2');
// let img3 = document.querySelector('#img3');

// btm1.addEventListener('click', func1);
// btm2.addEventListener('click', func2);

// function func1() {
// 	img1.src = img2.src;
// }
// function func2() {
// 	img1.src = img3.src;
// }

//250.1 Работа с текстовыми полями в JavaScript
// let btn = document.querySelector('#btn');
// let input = document.querySelector('#input');
// btn.addEventListener('click', func);

// function func() {
// 	input.value = 'New Text';
// }

//250.2
// let btn = document.querySelector('#btn');
// let input = document.querySelector('#input');
// let elem = document.querySelector('#elem');

// btn.addEventListener('click', func);

// function func() {
// 	elem.textContent = input.value;
// }

//250.3
// let btn = document.querySelector('#btn');
// let input = document.querySelector('#input');
// let input2 = document.querySelector('#input2');

// btn.addEventListener('click', func);

// function func() {
// 	input2.value = input.value * 2;
// }

//250.5
// let btn = document.querySelector('#btn');
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');
// let input2 = document.querySelector('#input2');
// let input3 = document.querySelector('#input3');
// let input4 = document.querySelector('#input4');
// let input5 = document.querySelector('#input5');

// btn.addEventListener('click', function () {
// 	elem.textContent =
// 		+input.value +
// 		+input2.value +
// 		+input3.value +
// 		+input4.value +
// 		+input5.value;
// });

//251.1 Фокус текстовых полей в JavaScript
// let elem = document.querySelector('#elem');

// elem.addEventListener('focus', function () {
// 	elem.value = 1;
// });
// elem.addEventListener('blur', function () {
// 	elem.value = elem.value *2
// });

//251.2
// let elem = document.querySelector('#elem');

// elem.addEventListener('blur', function () {
// 	elem.value = elem.value * 2;
// });

//251.3
// let elem = document.querySelector('#elem');

// elem.addEventListener('focus', function () {
// 	elem.value = ' ';
// });

//252.1 Исключения при работе с атрибутами в JavaScript
// let btn = document.querySelector('#btn');

// let elem = document.querySelector('#elem');
// btn.addEventListener('click', function () {
// 	console.log(elem.className);
// });

//252.2
// let btn = document.querySelector('#btn');
// let elem = document.querySelector('#elem');

// btn.addEventListener('click', function () {
// 	let newArr = [];
// 	newArr.push(elem.className);
// 	console.log(newArr);
// });

//253/1 Цепочки методов и свойств в JavaScript
// console.log(document.querySelector('#image').src);

//253.2 Преимущества и недостатки цепочек
//ДАнный способ написания элементво нагружает браузер, лучше обьявлять элементы в переменную
// console.log(document.querySelector('#image').src);
// console.log(document.querySelector('#image').width);
// console.log(document.querySelector('#image').height);

// let img = document.querySelector('#image');
// console.log(img.src);
// console.log(img.width);
// console.log(img.height);

//254.1 Объект this в JavaScript
// let elem = document.querySelector('#elem');

// elem.addEventListener('focus', function () {
// 	this.value = 1;
// });
// elem.addEventListener('blur', function () {
// 	this.value = 2;
// });

//254.2
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function () {
// 	this.textContent = +this.textContent + 1;
// });

//255.1 Преимущество this в JavaScript
// let p1 = document.querySelector('#p1');
// let p2 = document.querySelector('#p2');
// let p3 = document.querySelector('#p3');
// let p4 = document.querySelector('#p4');
// let p5 = document.querySelector('#p5');

// p1.addEventListener('click', func);
// p2.addEventListener('click', func);
// p3.addEventListener('click', func);
// p4.addEventListener('click', func);
// p5.addEventListener('click', func);

// function func() {
// 	this.textContent = this.textContent + '!';
// }

//255.2
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');

// elem1.addEventListener('blur', func);
// elem2.addEventListener('blur', func);
// elem3.addEventListener('blur', func);

// function func() {
// 	this.value = this.value * 2;
// }

//255.3 Получение группы элементов в JavaScript
// let elems = document.querySelectorAll('#elem');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', func);

// function func() {
// 	for (let elem of elems) {
// 		elem.textContent = 'text';
// 	}
// }

//255.4 Ne resheno
// let elems = document.querySelectorAll('#elem');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', func);

// function func() {
// 	for (let elem of elems) {
// 		for (let i = 0; i < elems.length; i++) {
// 			elem.textContent = elem.textContent + ' ' + i;
// 		}
// 	}
// }

//255.5
// let btn = document.querySelector('#btn');
// let elem = document.querySelector('#elem');
// let inp = document.querySelectorAll('#inp');

// btn.addEventListener('click', func);

// function func() {
// 	var sum = 0;
// 	for (let elem of inp) {
// 		sum += +elem.value;
// 	}
// 	elem.textContent = sum;
// }

//256.1 Добавление обработчиков в цикле в JavaScript
// let elems = document.querySelectorAll('#inp');

// for (let elem of elems) {
// 	elem.addEventListener('blur', func);
// }

// function func() {
// 	this.value = Number(this.value) + 1;
// }

//256.2
// let elems = document.querySelectorAll('#elem');

// for (let elem of elems) {
// 	elem.addEventListener('click', func);
// }

// function func() {
// 	this.textContent = this.textContent * 2;
// }

//257.1 Добавление анонимных обработчиков в цикле в JavaScript
// let divs = document.querySelectorAll('div');

// for (let div of divs) {
// 	div.addEventListener('click', function () {
// 		this.textContent++;
// 	});
// }

//258.1 Отвязывание событий в JavaScript
// let btn = document.querySelector('#btn');
// let link = document.querySelector('#link');
// console.log(link.textContent);

// btn.addEventListener('click', func);

// function func() {
// 	link.textContent = link.textContent + ' (' + link.href + ')';
// 	this.removeEventListener('click', func);
// }

//258.2
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', func);

// function func() {
// 	btn.textContent = +btn.textContent + 1;
// 	if (btn.textContent == 10) {
// 		this.removeEventListener('click', func);
// 	}
// }

//259.1 Отвязывание обработчиков событий в цикле в JavaScript
// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', func);
// }

// function func() {
// 	this.textContent = this.textContent + '!';
// 	this.removeEventListener('click', func);
// }

//260/1 Отвязывание анонимных функций в JavaScript
// let elems = document.querySelectorAll('li');

// for (let elem of elems) {
// 	elem.addEventListener('click', function func() {
// 		elem.textContent = +elem.textContent + 1;
// 	});
// }

//260.2
// let elems = document.querySelectorAll('li');

// for (let elem of elems) {
// 	elem.addEventListener('click', function func() {
// 		elem.textContent = +elem.textContent + 1;
// 		this.removeEventListener('click', func);
// 	});
// }

//260.3
// let elems = document.querySelectorAll('li');

// for (let elem of elems) {
// 	elem.addEventListener('click', function func() {
// 		if (elem.textContent < 10) {
// 			elem.textContent = +elem.textContent + 1;
// 		}
// 	});
// }

//261.1 Работа с атрибутами через методы в JavaScript
//getAttribute
// let elem = document.querySelector('#elem');
// let value = elem.getAttribute('value');
// console.log(value);

//261.2
// let elem = document.querySelector('#elem');
// let value = elem.getAttribute('class');
// console.log(value);

//261.3 setAttribute
// let elem = document.querySelector('#elem');
// let value = elem.setAttribute('value', 'text');
// console.log(elem.value);

//261.4
// let elem = document.querySelector('#elem');
// let value = elem.setAttribute('valid', 'class');

//261.5 removeAttribute
// let elem = document.querySelector('#elem');
// let value = elem.removeAttribute('value', 'text');
// console.log(elem.value);

//261.6 hasAttribute
// let elem = document.querySelector('#elem');
// let value = elem.hasAttribute('value');
// if (value == true) {
// 	console.log('Atribute yest');
// } else {
// 	console.log('atr net');
// }

//262.1 Манипулирование CSS классами в JavaScript
// let elem = document.querySelector('#elem');
// let classLength = elem.classList.length;
// console.log(classLength);

//262.2
// let elem = document.querySelector('#elem');
// let classNames = elem.classList;

// for (let className of classNames) {
// 	document.write(className);
// }

//262.3
// let elem = document.querySelector('#elem');
// elem.classList.add('xxx');
// console.log(elem);

//262.4
// let elem = document.querySelector('#elem');
// elem.classList.remove('zzz');
// console.log(elem);

//262.5
// let elem = document.querySelector('#elem');
// let classContains = elem.classList.contains('ggg');

// console.log(classContains);

//262.6
// let elem = document.querySelector('#elem');
// elem.classList.toggle('www');

// console.log(elem);

//263.1 Стилизация элементов через атрибут style в JavaScript
// let btn = document.querySelector('#btn');
// let div = document.querySelector('.div');

// btn.addEventListener('click', function () {
// 	div.style.height = '250px';
// 	div.style.width = '300px';
// 	div.style.border = 'solid';
// });

//263.2 Свойства с дефисом
// let btn = document.querySelector('#btn');
// let div = document.querySelector('.div');

// btn.addEventListener('click', function () {
// 	div.style.fontSize = '20px';
// 	div.style.borderTop = 'solid';
// 	div.style.backgroundColor = 'orchid';
// });

//263.3 Исключение
// let btn = document.querySelector('#btn');
// let li = document.querySelectorAll('li');

// btn.addEventListener('click', function () {
// 	li.style.cssFloat = 'left';
// });

//264.1 Стилизация с помощью CSS классов на JavaScript
//ЧТобы в дальнейшем легче было менять его значения не затрагивая название сам класса

//264.2
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');
// let btn3 = document.querySelector('#btn3');
// let elem = document.querySelector('p');

// btn1.addEventListener('click', function func1() {
// 	elem.classList.add('colored');
// 	elem.removeEventListener('click', func1);
// });

// btn2.addEventListener('click', function func2() {
// 	elem.classList.add('text_bold');
// 	elem.removeEventListener('click', func2);
// });

// btn3.addEventListener('click', function func3() {
// 	elem.classList.add('text_crossedOut');
// 	elem.removeEventListener('click', func3);
// });

//264.3 Дополнительное преимущество
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');
// let btn3 = document.querySelector('#btn3');
// let elem = document.querySelector('p');

// btn1.addEventListener('click', function func1() {
// 	elem.classList.toggle('colored');
// });

// btn2.addEventListener('click', function func2() {
// 	elem.classList.toggle('text_bold');
// });

// btn3.addEventListener('click', function func3() {
// 	elem.classList.toggle('text_crossedOut');
// });

//264.4 Применение
// let btn = document.querySelector('#btn');
// let elem = document.querySelector('#elem');

// btn.addEventListener('click', function () {
// 	elem.classList.toggle('active');
// });

///265.1 Нахождение элементов по родственным связям в JavaScript
// let elem = document.querySelector('#elem');
// let first = elem.firstElementChild.innerHTML;

// console.log(first);

//265.2
// let elem = document.querySelector('#elem');
// let last = elem.lastElementChild.innerHTML;
// last.style.color = 'red';
// document.write(last);

//265.3
// let elem = document.querySelector('#elem');
// let all = elem.children;

// for (let elem of all) {
// 	console.log(elem.innerHTML + ' !');
// }

//265.4 Родители элементов
// let elem = document.querySelector('#elem');
// let res = elem.parentElement;
// res.style.border = '1px solid red';

//265.5 closest мщет ближайшего родитеоя по селектору
// let elem = document.querySelector('#elem');
// let parent = elem.closest('div');
// console.log(parent);

//265.6
// let elem = document.querySelector('#elem');
// let parent = elem.closest('.www');
// console.log(parent);

//265.7 Поиск соседей
// let elem = document.querySelector('#elem');
// let text = elem.previousElementSibling.innerHTML;
// document.write(text + ' !');

//265.8
// let elem = document.querySelector('#elem');
// let text = elem.nextElementSibling.innerHTML;
// document.write(text + ' !');

//265.9
// let elem = document.querySelector('#elem');
// let text = elem.nextElementSibling.nextElementSibling.innerHTML;
// document.write(text + ' !');

//265.10
// let elem = document.querySelector('#elem');
// let elems = document.querySelectorAll('li');
// let text1 = elem.nextElementSibling.innerHTML;
// let text2 = elem.previousElementSibling.innerHTML;
// document.write(text1 + ' ' + text2);

//266.1 Другие полезные методы для поиска на JavaScript
// let elem = document.getElementById('elem');
// elem.value = '###';
// document.write(elem.value);

//266.2 Получение по имени тега
// let elems = document.getElementsByClassName('www');

// for (let elem of elems) {
// 	elem.style.color = 'red';
// }

//267.1 Поиск элементов внутри другого элемента в JavaScript
// let parent = document.querySelector('#parent');
// let elems1 = parent.querySelector('.www');
// let elems2 = parent.querySelector('.ggg');
// console.log(elems1);
// console.log(elems2);

//268.1 Пользовательские атрибуты в JavaScript
// let elem = document.querySelector('#elem');
// console.log(elem.textContent);
// elem.addEventListener('click', function () {
// 	elem.textContent = elem.textContent + ' ' + elem.dataset.text;
// });

//268.2
// let elems = document.querySelectorAll('div');

// for (let elem of elems) {
// 	elem.addEventListener('click', function () {
// 		elem.textContent = elem.textContent + elem.dataset.num;
// 	});
// }

//268.3
// let btn1 = document.querySelector('#btn1');
// btn1.dataset.num = 1;
// let btn2 = document.querySelector('#btn2');

// btn1.addEventListener('click', function () {
// 	btn1.dataset.num = +btn1.dataset.num + 1;
// });
// btn2.addEventListener('click', function () {
// 	console.log(btn1.dataset.num);
// });

//268.4
// let elem = document.querySelector('#elem');

// elem.addEventListener('blur', function () {
// 	let enteredLentgth = elem.value.length;
// 	let expectLength = elem.getAttribute('data-length');

// 	if (enteredLentgth != expectLength) {
// 		console.log('Символы не совпадают');
// 	} else {
// 		console.log('Символы совпадают');
// 	}
// });

//268.5
// let elem = document.querySelector('#elem');

// elem.addEventListener('blur', function () {
// 	let enteredLentgth = elem.value.length;
// 	let expectLength1 = elem.getAttribute('data-min');
// 	let expectLength2 = elem.getAttribute('data-max');

// 	if (enteredLentgth != expectLength1 && enteredLentgth != expectLength2) {
// 		console.log('Символы не попадают в диапазон');
// 	} else {
// 		console.log('Символы опадают в диапазон');
// 	}
// });

//268.6 Имена с дефисами
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function () {
// 	elem.textContent =
// 		elem.textContent + elem.dataset.productPrice * elem.dataset.productAmount;
// });

//268.7 Обращение через методы
// let elems = document.querySelectorAll('p');

// for (let i = 0; i < elems.length; i++) {
// 	elems[i].setAttribute('data-num', i + 1);
// }

//269.1 Работа с узлами в JavaScript
// let elem = document.querySelector('#elem');
// console.log(elem.firstChild);
// console.log(elem.firstElementChild);

//269.2
// let elem = document.querySelector('#elem');
// console.log(elem.nextSibling);
// console.log(elem.nextElementSibling);

//269.3
// let elem = document.querySelector('#elem');
// console.log(elem.previousSibling);
// console.log(elem.previousElementSibling);

//269.4
// let elem = document.querySelector('#elem');

// for (let node of elem.childNodes) {
// 	console.log(node);
// }

//269.5
// let elem = document.querySelector('#elem');

// for (let node of elem.childNodes) {
// 	console.log(node.nodeName);
// }

//269.6
// let elem = document.querySelector('#elem');

// for (let node of elem.childNodes) {
// 	if (node.nodeType == 1) {
// 		console.log(node.nodeName, ' =>Element');
// 	} else if (node.nodeType == 3) {
// 		console.log(node.textContent, ' =>Text');
// 	}
// }

//269.7
// let elem = document.querySelector('#elem');

// for (let node of elem.childNodes) {
// 	if (node.nodeType == 3) {
// 		console.log(node.nodeValue, ' =>text');
// 	}
// }

//269.8
// let elem = document.querySelector('#elem');

// for (let node of elem.childNodes) {
// 	if (node.nodeType == 8) {
// 		console.log(node.nodeValue + ' =>Comment');
// 	} else if (node.nodeType == 3) {
// 		console.log(node.nodeValue + '=>Text');
// 	}
// }

//269.9
// let elem = document.querySelector('#elem');

// for (let node of elem.childNodes) {
// 	if (node.nodeType == 1) {
// 		console.log(node.textContent + ' =>Element');
// 	} else if (node.nodeType == 3) {
// 		console.log(node.nodeValue + '=>Text');
// 	}
// }

//269.10
// let elem = document.querySelector('#elem');

// for (let node of elem.childNodes) {
// 	console.log(node.nodeName + ' ' + node.nodeType);
// }

//270.1 Советы по написанию кода на примере DOM в JavaScript
{
	/* <ul>
	<li>2000</li>
	<li>2004</li>
	<li>2021</li>
	<li>2022</li>
	<li>2025</li>
	<li>2031</li>
</ul>
Получите года, сумма цифр которых равна 6. Найдите сумму полученных годов. */
}

// let elems = document.querySelectorAll('li');
// let sum = 0;

// for (let i = 0; i <= elems.length; i++) {
// 	let text = +elems[i].textContent;
// 	sum += text;
// 	console.log(sum);
// }

//271.1 Поиск ошибок в коде с DOM в JavaScript
// let elems = document.querySelector('p');
// elems.textContent += '!';

//271.2
// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', function () {
// 		elem.textContent = +elem.textContent + 1;
// 	});
// }

//271.3
// let button = document.querySelector('button');
// let elem = document.querySelector('p');

// button.addEventListener('click', function () {
// 	elem.innerHTML = <b>elem.innerHTML</b>;
// });

let modalBtn = document.querySelector('.modal__btn');
let closeModalBtn = document.querySelector('.close__btn');
let modal = document.querySelector('.modal');

modalBtn.onclick = function () {
	document.querySelector('.modal').style.display = 'block';
};

closeModalBtn.onclick = function () {
	document.querySelector('.modal').style.display = 'none';
};

window.onclick = function (e) {
	if (e.target == modal) {
		document.querySelector('.modal').style.display = 'none';
	}
};
