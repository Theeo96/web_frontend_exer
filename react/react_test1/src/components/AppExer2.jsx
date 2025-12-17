import "../AppExer2.css";

function StudentList({ students }) {
  return (
    <div>
      <ul>
        {students.map((student) => {
          return (
            <li key={student.id}>
              이름 : {student.name} |
              성적 : {student.score>=90
              ? student.score
              : student.score + " | 성적우수🏆"}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function AppExer2() {
  const students = [
    { id: 1, name: "김철수", score: 85 },
    { id: 2, name: "이영희", score: 92 },
    { id: 3, name: "박민수", score: 78 },
    { id: 4, name: "정수진", score: 95 },
  ];

  return (
    <>
      <StudentList students={students} />
    </>
  );
}

export default AppExer2;
