// let a = 26 + 2;

// function foo(n) {
// 	// body...
// 	let b = document.getElementById("sig").innerHTML = 5;
// };

// foo(2);
// console.log(a);

let myMatch = "Gigcantcic";
let myRegex = /g[a-u]*?c/gi;
console.log(myMatch.match(myRegex));

let text = "<h1>Winter is coming</h1>";
let myRedex = /<h.*?>/; // Change this line
let result = text.match(myRedex);
console.log(result);

// class person {
// 	constructor() {
// 		car: "Camry",
// 		model: "Muscle",
// 		nickname: "Spider",
// 		carCombo: function() {
// 			return this.car + " " + this.nickname;
// 		}
// 	}

// 	add() {
// 		newCar: this.model,
// 		modelCar: this.nickname + " " + this.car
// 	}
// };
// let foo = person.carCombo();
// console.log(foo);

