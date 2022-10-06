import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import {FaRegTrashAlt} from "react-icons/all";

const TodoItem = ({todos, onDel, onToggle}) => {
    const {id, text, done} = todos;
    return(
            <li  className={done ? 'on' : ''}>
                <span onClick={() => onToggle(id)}>
                    { done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }  {/* 조건부 렌더링 */}
                </span>
                <em onClick={() => onToggle(id)}>
                    { id + " : " + text }
                </em>
                <button onClick={() => onDel(id)}>
                    <FaRegTrashAlt color='rgb(175,169,169)' size='20' />
                </button>
            </li>
    )
};

export default TodoItem;