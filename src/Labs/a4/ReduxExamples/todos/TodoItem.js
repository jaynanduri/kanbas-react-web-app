import {useDispatch} from "react-redux";
import {deleteTodo, setTodo} from "./todosReducer";

function TodoItem({todo}) {
    const dispatch = useDispatch();
    return (
        <li className={"list-group-item"} key={todo.id}>
            {todo.title}
            <button onClick={() => dispatch(deleteTodo(todo.id))}
                    className={"btn btn-danger border m-1 float-end"}>Delete</button>
            <button onClick={() => dispatch(setTodo(todo))}
                    className={"btn btn-light border m-1 float-end"}>Edit</button>
        </li>
    );
}

export default TodoItem;