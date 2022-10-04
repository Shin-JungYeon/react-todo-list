import './App.css';
import {useState} from "react";
import {TodoList} from "./todo/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 하기',
      checked: false,
    },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <TodoList
          todos = {todos}
        />
      </header>
    </div>
  );
}

export default App;
