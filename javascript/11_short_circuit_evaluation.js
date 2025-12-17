console.log("--- 단축평가 ---\n");

const isAdmin = true;
isAdmin && console.log("🔒 관리자 메뉴에 접근할 수 있습니다.");
// isAdmin이 true일 때만 메시지가 출력됩니다.

const isLoggedIn = false;
isLoggedIn || console.log("✅ 로그인한 사용자입니다.");

console.log("\n--- 예제 1 ---\n");

const user = { name: "Tom" };
user && user.name && console.log(`안녕하세요, ${user.name}님!`);
// user와 user.name이 모두 존재할 때만 인사 메시지 출력

const user2 = { name: "" };
user2 && user2.name && console.log(`반갑습니다, ${user2.name}님!`);

console.log("\n--- 예제 2 ---\n");

const user_name = "";
const displayName = user_name || "이름 없음";
console.log(displayName); // "이름 없음"

const user_name2 = "김이름";
const displayName2 = user_name2 || "이름 없음";
console.log(displayName2); // "김이름"

console.log("\n--- 예제 3 ---\n");

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName(); //
printName({ name: "김철수" }); //
