// import Header from "./Header";
// import Article from "./Article";
// import Footer from "./Footer";

function Greeting({ name, age }) {
  return (
    <>
      <h1>안녕하세요 {name}님</h1>
      <h3>{age}살이시군요 반갑습니다.</h3>
    </>
  );
}

function MailCount({ mailCount }) {
  return <p>📧메일이 {mailCount}개 있습니다.</p>;
}

function MenuList({ menus }) {
  return (
    <ul>
      {menus.map((menu) => {
        return <li key={menu.id}>{menu.menu}</li>;
      })}
    </ul>
  );
}

function AppExer() {
  const mailCount = 1;
  const menus = [
    { id: 1, menu: "아메리카노" },
    { id: 2, menu: "카페라떼" },
    { id: 3, menu: "바닐라라떼" },
  ];

  return (
    <>
      <Greeting name="김철수" age={20} />
      <Greeting name="김사람" age={30} />
      {mailCount > 0 && <MailCount mailCount={mailCount} />}
      <MenuList menus={menus} />
    </>
  );
}

export default AppExer;

// function App() {
//   return (
//     <div>
//       <Header />
//       <main>
//         <Article />
//       </main>
//       <Footer />
//     </div>
//   );
// }
//
// export default App;
