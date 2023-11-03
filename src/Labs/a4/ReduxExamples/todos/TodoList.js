import React, {useState} from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";

function TodoList() {
    const {todos} = useSelector((state) => state.todosReducer);
    return (
        <>
            <h2>Todo List</h2>
            <ul className={'list-group'}>
                <TodoForm/>
                {todos.map((todo) => (<TodoItem todo={todo}/>))}
            </ul>
        </>
    );

}
export default TodoList;