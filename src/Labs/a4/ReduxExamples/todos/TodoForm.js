import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, setTodo, updateTodo} from "./todosReducer";

function TodoForm(){
    const {todo} = useSelector((state)=> state.todosReducer);
    console.log(todo.title);
    const dispatch = useDispatch();
    return (
        <li className={"list-group-item"}>
            <button onClick={()=> dispatch(addTodo(todo))}
                    className={"btn btn-success border float-end m-1"}>Add</button>
            <button onClick={() => dispatch(updateTodo(todo))}
                    className={"btn btn-warning border float-end m-1"}>Update</button>
            <input value={todo.title} className={"form-control w-25 d-inline m-1"}
                   onChange={(e)=>dispatch(setTodo({...todo,
                   title: e.target.value,
                   }))
                }
            />
        </li>
    );
}

export default TodoForm;