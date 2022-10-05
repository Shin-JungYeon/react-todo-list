import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import {FaRegTrashAlt} from "react-icons/all";

const TodoItem = ({todos, onDel, onToggle}) => {
    const {id, text, done} = todos;
    return(
        <div>
            <li  className={done ? 'on' : ''}>
                <span onClick={() => onToggle(id)}>
                    {done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                </span>
                <em onClick={() => onToggle(id)}></em>
                <button onChange={() => onDel(id)}><FaRegTrashAlt color='rgb(175,169,169)' size='20' /></button>
            </li>
        </div>
    )
};

export default TodoItem;