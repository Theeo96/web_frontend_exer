console.log("--- string ---\n");

const greeting = "안녕하세요";
const userName = "김철수";
const message = `
김철수님
안녕하세요.
`;

const message2 = `${userName}님 안녕하세요.`;

console.log(message2);

console.log("\n--- number ---\n");

const age = 25;
const price = 19.99;
const negative = -1;

console.log(age);
console.log(typeof age);

console.log("\n--- boolean ---\n");

const a = 1;
const b = "1";

console.log(a == b);
console.log(a != b);
console.log(a === b);
console.log(a !== b);

console.log("\n--- 명시적 형변환 ---\n");

let x = 100;
let y = String(100);

console.log(x, y);
console.log(typeof x, typeof y);

y = Number(100);
console.log(typeof y);

y = Number(3.14);
console.log(typeof y, y);

y = parseInt(y);
console.log(typeof y, y);

x = 100;
y = x.toString();
console.log(typeof x, x);
console.log(typeof y, y);

console.log("\n--- 암묵적 형변환 ---\n");

let result = "10" + 5;
console.log(typeof result, result);

result = "10" + undefined;
console.log(typeof result, result);

result = "10" + null;
console.log(typeof result, result);

result = "10" * 5;
console.log(typeof result, result);

result = "10" * undefined;
console.log(typeof result, result);

result = "10" * null;
console.log(typeof result, result);

result = "10" * true;
console.log(typeof result, result);

result = "10" * false;
console.log(typeof result, result);

console.log("\n--- 배열 ---\n");

const fruits = ["사과", "바나나", "오렌지"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[-1]);
console.log(fruits[10]);
console.log(fruits[fruits.length - 1]);

console.log(fruits);
fruits.push("포도");
console.log(fruits);

console.log("\n--- 객체 ---\n");

const person = {
  name: "홍길동",
  age: 25,
  isStudent: true,
};

console.log(person["name"]);
console.log(person.name);

person.name = "김철수";
console.log(person["name"]);

console.log(person);
person.email = "abc@naver.com";
console.log(person);

console.log("\n--- 자기소개 실습 ---\n");

const myName = "김김김";
const myAge = 10;
const myHobbies = ["맛집", "사진", "영화", "음악"];
const myProfile = {
  name: myName,
  age: myAge,
  hobbies: myHobbies,
  isStudent: false,
};

console.log(myProfile, "\n");
console.log(`이름 : ${myProfile.name}`);
console.log(`나이 : ${myProfile.age}`);
console.log(`취미 : ${myProfile.hobbies.join(", ")}`);
console.log(`학생여부 : ${myProfile.isStudent}`);
