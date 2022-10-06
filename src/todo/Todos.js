import {useRef, useState} from 'react';
import TodoInput from './TodoInput';
import TodoList from "./TodoList";
import '../assets/css/Todos.css';

const Todos = () => {
    // useState는 상태값이 변경될 때마다 새로 렌더링 됨.
    // useRef는 set으로 상태를 변경해줄 때 새로 렌더링 됨.
    // useState가 훨씬 많은 렌더링이 일어남.

    const num = useRef(1);  // useRef : 저장 공간(변수 관리), DOM 요소에 접근을 위해 사용 되는 React hooks
    const [todos, setTodos] = useState([]);  // useState : 상태를 관리할 수 있음. 상태의 기본값을 파라미터로 넣어서 호출. 동적인 값을 상태(state) 라고 부름.

    const onAdd = (text) => {
        // 직접 수정 대신 새로운 객체를 만들어 새로운 객체에 변화를 주고 이 상태를 저장해서 사용해야함.
        setTodos([
            ...todos,  // 스프레드 구문 >> todos(배열)의 요소들. 객체의 내용을 모두 '펼쳐서' 기존 객체를 복사해줌.
            {
                id: num.current++,
                text: text,
                done: false
            }
        ])
    };

    // filter 로 선택된 todo만 빼고 새로 list 구성
    const onDel = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    // 완료 처리: id 와 일치 하는 todo의 인자 중 done을 바꿔주기.
    const onToggle = (id) => {
        setTodos(todos.map(todo => todo.id === id
            ? {
                ...todo,  // 스프레드 구문 >> todo의 인자들(객체의 각 프로퍼티들).
                done: !todo.done
            }
            : todo
        ))
    };

    return (
        <div className='Todos'>
            <h1>쟁연이의 할 일 목록</h1>
            <TodoInput onAdd={onAdd} />
            <TodoList todos={todos} onDel={onDel} onToggle={onToggle}/>
        </div>
    )

};

export default Todos;