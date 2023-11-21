import React, {useState} from "react";

function WorkingWithArrays() {
    const [todo, setTodo] = useState({
        id: 1,
        title: "Node JS assignment",
        description: "Create a nodeJS assignment with express",
        due: "2021-09-09",
        completed: false,
    });
    const BASE_URL = process.env.REACT_APP_BACKEND_URL;
    const API = `${BASE_URL}/a5/todos`;
    return(
        <>
            <h3>Working with Arrays</h3>
            <input value={todo.id} onChange={(e)=> setTodo({
                ...todo, id: e.target.value})} className="form-control" type="number"/>
            <br/>
            <input value={todo.title} onChange={(e)=> setTodo({
                ...todo, title: e.target.value})} className="form-control" type="text"/>
            <br/>
            <input value={todo.completed} onChange={(e)=> setTodo({
                ...todo, completed: e.target.value})} className="form-control" type="text"/>
            <br/>
            <input value={todo.description} onChange={(e)=> setTodo({
                ...todo, description: e.target.value})} className="form-control" type="text"/>
            <br/>
            <h4>Deleting from an Array</h4>
            <a href={`${API}/${todo.id}/delete`} className="btn btn-primary me-2">Delete Todo with Id = {todo.id}</a>
            <h4>Updating an Item in an Array</h4>
            <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary me-2">
                Update Title to {todo.title}
            </a>
            <a href={`${API}/${todo.id}/completed/${todo.completed}`} className="btn btn-primary me-2">
                Update completed to {todo.completed.toString()}
            </a>
            <a href={`${API}/${todo.id}/description/${todo.description}`} className="btn btn-primary me-2">
                Update description to {todo.description}
            </a>
            <h4>Retrieving Arrays</h4>
            <a href={API} className="btn btn-primary me-2">Get Todos</a>
            <h4>Retrieving an Item from an Array by ID</h4>
            <input className="form-control" value={todo.id} onChange={e => setTodo(
                {...todo, id: e.target.value})} type="number"/>
            <a href={`${API}/${todo.id}`} className="btn btn-primary mt-2 me-2">Get Todos by ID</a>
            <h4>Filtering Array Items</h4>
            <a href={`${API}?completed=true`} className="btn btn-primary me-2">Get Completed Todos</a>
            <h4>Creating new items in an array</h4>
            <a href={`${API}/create`} className="btn btn-primary me-2">Create Todo</a>
        </>
    );
}

export default WorkingWithArrays;