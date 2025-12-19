import { useState } from "react";
import "./TodoList.css";

const todoList = [
  { id: 1, task: "첫번째할일", isDone: false },
  { id: 2, task: "두번째할일", isDone: true },
  { id: 3, task: "세번째할일", isDone: false },
];

function TodoList() {

  const [todos, setTodos] = useState(todoList);
  const [todoValue, setTodoValue] = useState("");

  function TodoItem({todo}) {
    return (
      <li className={todo.isDone?"completed":""}>
        <input type="checkbox" defaultChecked={todo.isDone}
          onChange={()=>{
            isDoneToggle(todo.id);
          }}/>
        <span>{todo.task}</span>
        <button onClick={()=>{deleteTodo(todo.id)}}>✖️</button>
      </li>
    )
  }

  function addTodo() {
    if(!todoValue.trim()) {
      return;
    }
    // const newTodos = [...todos, {id:todos.length+1, task:todoValue.trim(), isDone:false}];
    const newTodos = [...todos, {id:Date.now(), task:todoValue.trim(), isDone:false}];
    // const newTodos = [...todos, {id:Date.now(), task:todoValue.trim()+" id값 : "+Date.now(), isDone:false}];
    setTodos(newTodos);
    setTodoValue("");
  }

  function isDoneToggle(id) {
    const newTodos = todos.map((todo)=>{
      return todo.id === id ? {...todo, isDone:!todo.isDone} : todo;
    });
    setTodos(newTodos);
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo)=>{
      return todo.id!==id;
    });
    setTodos(newTodos);
  }

  function clearAll() {
    setTodos([]);
  }

  function clearCompleted() {
    setTodos(todos.filter((todo) => !todo.isDone));
  }

  const remainingCount = todos.filter((todo) => !todo.isDone).length;

  return (
    <div className="container">
      <h1>📝 Todo List</h1>
      <div className="input-box">
        <input type="text" placeholder="할 일을 입력하세요" value={todoValue}
          onChange={(e)=>{
            setTodoValue(e.target.value)
          }}
          onKeyUp={(e)=>{
            if(e.key === "Enter") {
              addTodo();
            }
          }}/>
        <button onClick={addTodo}>추가</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo)=> (<TodoItem key={todo.id} todo={todo}/>))}
      </ul>
      <p></p>
      <span>
        남은 할 일: {remainingCount}개
      </span>

      <div style={{ marginTop: "10px" }}>
        <button onClick={clearCompleted}>
          완료된 항목 삭제
        </button>

        {/* 전체 삭제 버튼 */}
        <button onClick={clearAll}>
          전체 삭제
        </button>
      </div>
    </div>
  );
}

export default TodoList;
