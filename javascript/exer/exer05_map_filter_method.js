console.log("--- 연습문제 1 ---\n");

// 문제 1: 다음 점수 배열에서 80점 이상인 점수만 필터링하세요
const scores = [95, 72, 88, 63, 91, 55, 87];

const goodScore = scores.filter((score) => score >= 80);
console.log(goodScore);

console.log("\n--- 연습문제 2 ---\n");

// 문제 2: 다음 학생 배열에서 각 학생의 이름만 추출하세요
const students = [
  { id: 1, name: "김철수", grade: 3 },
  { id: 2, name: "이영희", grade: 2 },
  { id: 3, name: "박민수", grade: 1 },
];

const studentNames = students.map((student) => student.name);
console.log(studentNames);

console.log("\n--- 연습문제 3 ---\n");

// 문제 3: 다음 학생 배열에서 2학년 이상 학생들의 이름만 추출하세요
const students2 = [
  { id: 1, name: "김철수", grade: 3 },
  { id: 2, name: "이영희", grade: 2 },
  { id: 3, name: "박민수", grade: 1 },
];

const studentOver2ndNames = students2
  .filter((student) => student.grade >= 2)
  .map((student) => student.name);
console.log(studentOver2ndNames);
