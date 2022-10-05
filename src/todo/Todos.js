import {useRef, useState} from 'react';
import TodoInput from './TodoInput';
import TodoList from "./TodoList";
import '../assets/css/Todos.css';

const Todos = () => {
    const num = useRef(1);  // 저장 공간(변수 관리), DOM 요소에 접근을 위해 사용 되는 React hooks
    const [todos, setTodos] = useState([]);

    const onAdd = (text) => {
        setTodos([
            ...todos,
            {
                id: num.current++,
                text: text,
                done: false
            }
        ])
    };

    // filter 로 선택된 todo 만 빼고 새로 list 구성
    const onDel = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    // 완료 처리
    const onToggle = (id) => {
        setTodos(todos.map(todo => todo.id === id
            ? {
                ...todo,
                done: !todo.done
            }
            : todo
        ))
    };

    return (
        <div className='Todos'>
            <h1>Todo List</h1>
            <TodoInput onAdd={onAdd} />
            <TodoList todos={todos} onDel={onDel} onToggle={onToggle}/>
        </div>
    )

};

export default Todos;