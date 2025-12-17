console.log("--- 객체 구조 분해 ---\n");

const user = {
  name: "김철수",
  age: 30,
  email: "kim@example.com",
  job: "개발자",
};

// 점 표기법으로 name, email을 개별 변수에 할당하기
// const name = user.name;
// const email = user.email;
// const job = user.job;
// console.log(name, age, email, job);

const { name, age, email, job } = user;
console.log(name, age, email, job);

const { name: user_name, age: howOld } = user;
console.log(user_name, howOld);

const { name: hisName, phone = "010-1234-5678" } = user;
console.log(hisName, phone);

console.log("\n--- 배열 구조 분해 ---\n");

const colors = ["red", "green", "blue"];

// 기존 방식 - 인덱스를 통해 개별 값에 접근하여 할당
const first_color = colors[0];
const second_color = colors[1];
console.log(first_color, second_color);

// 구조 분해 할당 : 배열의 각 요소를 순서대로 변수에 할당합니다.
const [first, second, third] = colors;
console.log(first, second, third); // "red green blue"

// 일부 값 무시 : 쉼표로 불필요한 값을 건너뛸 수 있습니다.
const [firstColor, , thirdColor] = colors;
console.log(firstColor); // "red"
console.log(thirdColor); // "blue"

console.log("\n--- 함수 구조 분해 ---\n");

// 기존 방식
// function printUser(user) {
//   console.log(user.name, user.age);
// }

// printUser(user);

// 구조 분해 사용
function printUser({ name, age }) {
  console.log(name, age);
}

printUser(user);

console.log("\n--- 예제 1 ---\n");

// 구조 분해 할당 사용하기
const person = { person_name: "홍길동", person_age: 30, person_city: "서울" };

// name과 city만 꺼내보세요
const { person_name, person_city } = person;

console.log(person_name); //홍길동
console.log(person_city); //서울

console.log("\n--- 예제 2 ---\n");

// 같은 파일에 동명의 변수명이 너무 많아서 수정
const tomUser = { tomName: "Tom", tomAge: 20, tomCity: "Seoul" };

// 여기에 함수 작성
const printTom = ({ tomName, tomAge, tomCity }) => {
  console.log(`이름 : ${tomName}, 나이 : ${tomAge}`);
};
// 함수 호출 예시: printUser(user);
// 출력: "이름: Tom, 나이: 20"
printTom(tomUser);

console.log("\n--- 예제 3 ---\n");

const arr = [3, 7, 10];

// 여기에 함수 작성
const sumFirstTwo = ([num1, num2]) => {
  console.log(num1 + num2);
};

// 함수 호출 예시: sumFirstTwo(arr);
// 결과: 10
sumFirstTwo(arr);
