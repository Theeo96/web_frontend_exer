console.log("--- 숫자 배열 다루기 ---\n");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 짝수만 필터링
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

// 5보다 큰 숫자만 필터링
const bigNumbers = numbers.filter((num) => num > 5);
console.log(bigNumbers); // [6, 7, 8, 9, 10]

console.log("\n--- 객체 배열 다루기 ---\n");

// 객체 배열에서 조건 필터링
const users = [
  { id: 1, name: "철수", age: 25, isActive: true },
  { id: 2, name: "영희", age: 30, isActive: false },
  { id: 3, name: "민수", age: 28, isActive: true },
];

// 활성 사용자만
const activeUsers = users.filter((user) => user.isActive);
console.log("활성 사용자 - ", activeUsers);

// 나이가 27세 이상인 사람만
const adults = users.filter((user) => user.age >= 27);
console.log("나이 27세 이상 - ", adults);

console.log("\n--- map + filter method ---\n");

const products = [
  { id: 1, name: "노트북", price: 1000000, inStock: true },
  { id: 2, name: "마우스", price: 30000, inStock: false },
  { id: 3, name: "키보드", price: 80000, inStock: true },
  { id: 4, name: "모니터", price: 300000, inStock: true },
];

// 재고가 있는 상품의 이름만 추출
const availableProducts = products
  .filter((product) => {
    return product.inStock;
  })
  .map((product) => {
    return product.name;
  });

// const availableProducts = products
//   .filter((product) => product.inStock)
//   .map((product) => product.name);

console.log(availableProducts); // ["노트북", "키보드", "모니터"]
