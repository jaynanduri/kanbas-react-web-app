import * as client from "./client";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Signin() {
    const [credentials, setCredentials] = useState({username: "", password: ""});
    const navigate = useNavigate();
    const signin = async () => {
        // console.log(credentials);
        await client.signin(credentials);
        navigate("/Kanbas/Dashboard");
    };
    return (
        <div className="container-fluid">
          <h1>Signin</h1>
          <input className='form-control w-75 mb-2'
                 value={credentials.username}
                 onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
          <input className='form-control w-75 mb-2'
                 type='password'
                 value={credentials.password}
                 onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
          <button className="btn btn-primary border" onClick={signin}> Signin </button>
        </div>

    );
}

export default Signin;