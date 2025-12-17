console.log("--- 배열 스프레드 ---\n");

const original = [1, 2, 3];
const copy = [...original];

console.log("original : ", original);
console.log("copy : ", copy);

// 배열 결합
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log("combined : ", combined); // [1, 2, 3, 4, 5, 6]

// 배열에 요소 추가
const newArr = [...original, 4, 5];
console.log("newArr : ", newArr);

console.log("\n--- 객체 스프레드 ---\n");

const user = { name: "홍길동", age: 25 };
const original2 = { ...user };

console.log("user : ", user);
console.log("original2 : ", original2);

const info = { name: "홍길동" };
const details = { age: 25, city: "서울" };

const merged = { ...info, ...details };
// { name: '홍길동', age: 25, city: '서울' }
console.log("merged : ", merged);

const withHobby = { ...merged, hobby: "뛰기" };
console.log("withHobby : ", withHobby);

const updated = { ...user, age: 26 };
// { name: '홍길동', age: 26 }
console.log("updated : ", updated);

// 스프레드가 뒤에 오는 경우
const result1 = { age: 30, ...user };
// { age: 25, name: '홍길동' }  ← age가 25로 덮어써짐
console.log("result1 : ", result1);

// 스프레드가 앞에 오는 경우
const result2 = { ...user, age: 30 };
// { name: '홍길동', age: 30 }  ← age가 30으로 덮어써짐
console.log("result2 : ", result2);
