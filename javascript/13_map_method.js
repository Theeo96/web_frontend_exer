console.log("--- 숫자 배열 다루기 ---\n");

// 숫자 배열을 2배로 만들기
const numbers = [1, 2, 3, 4, 5];

// 기존 방식 (for문)
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}
console.log("기존 방식 - ", doubled); // [2, 4, 6, 8, 10]

// map 사용
const doubled2 = numbers.map((num) => {
  return num * 2;
});
console.log("map 방식 - ", doubled2); // [2, 4, 6, 8, 10]

// 매개변수가 1개이면 괄호 생략 가능
// return만 있으면 중괄호와 return 생략 가능
const doubled3 = numbers.map((num) => num * 2);
console.log("map 방식(+ 생략) - ", doubled3); // [2, 4, 6, 8, 10]

console.log("\n--- 객체 배열 다루기 ---\n");

// 객체 배열 다루기
const users = [
  { id: 1, name: "철수", age: 25 },
  { id: 2, name: "영희", age: 30 },
  { id: 3, name: "민수", age: 28 },
];

// 이름만 추출
// const names = users.map((user)=>{return user.name})
const names = users.map((user) => user.name);
console.log(names); // ["철수", "영희", "민수"]

const ages = users.map((user) => user.age);
console.log(ages); // ['25', '30', '28']

console.log("\n--- map + 인덱스 활용 ---\n");

const fruits = ["사과", "바나나", "오렌지", "포도"];

// 요소 + 인덱스 사용 (인덱스를 활용한 변환)
const result2 = fruits.map((fruit, index) => {
  return `${index + 1}. ${fruit}`; // 순번 붙이기
});
console.log(result2);
// ["1. 사과", "2. 바나나", "3. 오렌지", "4. 포도"]

console.log("\n--- map + 인덱스, 원본배열 활용 ---\n");

// 요소 + 인덱스 + 원본배열 사용
const result3 = fruits.map((fruit, index, array) => {
  if (index === 0) {
    return `[첫 번째] ${fruit}`;
  } else if (index === array.length - 1) {
    return `[마지막] ${fruit}`;
  } else {
    return fruit;
  }
});
console.log(result3);
// ["[첫 번째] 사과", "바나나", "오렌지", "[마지막] 포도"]
