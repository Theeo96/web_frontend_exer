// import "./App.css";

function Example() {
  const userName = "김철수";
  const userAge = 20;
  const userInfo = {
    age: 20,
    school: "한국대학교",
    hobby: ["운동", "독서", "글쓰기"],
    isMember: false,
  };

  const title = "리액트 수업";

  return (
    <>
      <h1>hello react</h1>
      {/* 주석입니다 가나다라 */}
      <p style={{ color: "red", backgroundColor: "gold" }}>good good</p>
      <p>안녕하세요 {userName}님!</p>
      <p>{userAge}살 이시군요!</p>
      <br></br>
      <p>내년이면 {userAge + 1}살 이십니다.</p>
      <p>{userInfo.school} 다니시는군요.</p>
      <p>취미는 {userInfo.hobby.join(", ")} 군요.</p>
      <p>멤버 여부 : {userInfo.isMember ? "Y" : "N"}</p>
      <hr></hr>

      <h1>{title}</h1>
      <p className="desc">반갑습니다.</p>
      <br></br>
      <div style={{ color: "red" }}>경고</div>
    </>
  );
}

export default Example;
