import TodoItem from "./TodoItem";
import '../assets/css/TodoList.css';

function TodoList({todos, onDel, onToggle}) {
    return(
        <ul className='TodoList'>
            {
                todos.map((todo) => <TodoItem key={todo.id}
                todos={todo} onDel={onDel} onToggle={onToggle}/>)
            }
        </ul>
    );
}

export default TodoList;