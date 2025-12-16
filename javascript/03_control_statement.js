console.log("--- 제어문 ---\n");

let score = 90;

if (score > 60) {
  console.log("합격입니다!");
} else if (score === 60) {
  console.log("턱걸이 입니다!");
} else {
  console.log("불합격입니다!");
}

console.log("\n--- 삼항연산자 ---\n");

const age = 20;

const age_status = age > 18 ? "성인" : "미성년자";

console.log(age_status);
age_status === "성인"
  ? console.log("성인입니다")
  : console.log("미성년자입니다");

console.log("\n--- 반복문 ---\n");

for (let i = 1; i <= 5; i++) {
  console.log(`숫자 ${i}`);
}

let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log(`\n1부터 10까지의 숫자 합은 ${sum}\n`);

let num = 3;
for (let i = 1; i <= 9; i++) {
  console.log(`${num} X ${i} = ${num * i}`);
}

const fruits = ["사과", "바나나", "오렌지"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let i in fruits) {
  console.log(i);
}

for (let i of fruits) {
  console.log(i);
}
