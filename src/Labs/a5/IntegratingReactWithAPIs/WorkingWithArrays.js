import React, {useState, useEffect} from "react";

import axios from "axios";

function WorkingWithArrays() {
    const [errorMsg, setErrorMsg] = useState(null);
    const BASE_URL = process.env.BACKEND_URL;
    const API = `${BASE_URL}/a5/todos`;
    const [todo, setTodo] = useState({
    id: 1, title: "Learn NodeJS", due: "2021-09-09",
    description: "Create a NodeJS server with ExpressJS and various RESTful APIs", completed: false,
  });

    const [todos, setTodos] = useState([]);
    const postTodo = async () => {
        console.log(todo);
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    const deleteTodo = async (todo) => {
        try{
           const response = await axios.delete(`${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id)); 
        } catch (e) {
            console.log(e);
            setErrorMsg(e.response.data.message);
        }
        
    }
    const fetchByID = async (id) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    }
    const updateTodo = async () => {
        try{
          const  response = await axios.put(`${API}/${todo.id}`, todo);
            setTodos(todos.map((t)=>(t.id===todo.id ? todo: t)));
            setTodo({});
        } catch (e) {
            console.log(e);
            setErrorMsg(e.response.data.message);
        }
    }
    useEffect(()=>{
        fetchTodos();
    }, []);
    return (
        <>
            <h3>Working with arrays</h3>
            <input value={todo.id} className="form-control mb-2" readOnly/>
            <input
                onChange={(e)=> setTodo({...todo, title: e.target.value})}
                value={todo.title}
                type="text"
                className="form-control mb-2"
            />
            <textarea
                onChange={(e)=> setTodo({...todo, description: e.target.value})}
                value={todo.description} className="form-control mb-2"/>
            <input onChange={(e)=>setTodo({...todo, due: e.target.value})}
                  value={todo.due} type="date" className={"form-control mb-2"}
            />
            <div>
                <input
                    onChange={(e)=>setTodo({...todo, completed: e.target.checked})}
                    className="me-2"
                    type="checkbox" value={todo.completed}
                />
                <label>Completed</label>
            </div>
            <br/>
            <button className="btn btn-primary w-100 mb-2">
                Create Todo
            </button>
            <button onClick={postTodo} className="btn btn-warning w-100 mb-2">
                Post Todo
            </button>
            <button onClick={updateTodo} className="btn btn-success w-100 mb-2">
                Update Todo
            </button>
            { errorMsg && (
                <div className="alert alert-danger mb-2 mt-2">
                  {errorMsg}
                </div>
            )}
            <ul className="list-group">
                {todos.map((todo) => (
                  <li key={todo.id} className="list-group-item">
                    <button onClick={() => fetchByID(todo.id)} className="btn btn-warning float-end m-1">
                      Edit
                    </button>
                    <button onClick={() => deleteTodo(todo)} className="btn btn-danger float-end m-1">
                      Remove
                    </button>
                    <input
                      checked={todo.completed}
                      type="checkbox" readOnly
                      className="me-2"
                    />
                    {todo.title}
                    <p>{todo.description}</p>
                    <p>{todo.due}</p>
                  </li>
                ))}
            </ul>

        </>
    );
}

export default WorkingWithArrays;