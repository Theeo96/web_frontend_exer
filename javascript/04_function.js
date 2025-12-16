// console.log(sayHello("민수"));

// function sayHello(name) {
//   return `hello ${name}`;
// }

// console.log("\n--- 함수 표현식 ---\n");
// const add = function (x, y) {
//   return x + y;
// };

// console.log(add(1, 2));

// console.log("\n--- 화살표 함수 ---\n");

// const add2 = (x, y) => {
//   return x + y;
// };
// console.log(add2(3, 4));

// const add3 = (x, y, z) => x + y + z;
// const square = (x) => x * x;

// console.log(add3(2, 3, 4));
// console.log(square(5));

// const sayHello = (userName) => `Hello ${userName}`;

// console.log(sayHello("철수"), "\n");

const isPass = (score) => (score > 80 ? "합격" : "불합격");

console.log(isPass(90));
console.log(isPass(60), "\n");

const radiusToArea = (radius) => Math.PI * radius ** 2;

console.log(radiusToArea(5));
