import { MdCheckBox, MdCheckBoxOutlineBlank, MdModeEdit, MdRemoveCircleOutline } from "react-icons/md";

function TodoListItem({todo}) {
    const {id, text, checked} = todo;
    return(
        <li  className="TodoListItem">
            <div className={cn('checkbox', {checked})}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="edit">
                <MdModeEditOutline />
            </div>
            <div className="remove">
                <MdRemoveCircleOutline />
            </div>
        </li>
    )
}

export default TodoListItem;