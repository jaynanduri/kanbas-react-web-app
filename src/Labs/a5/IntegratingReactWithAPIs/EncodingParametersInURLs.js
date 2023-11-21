import React, {useEffect, useState} from "react";

import axios from "axios";

function EncodingParametersInURLs() {
    const [welcome, setWelcome] = useState("");
    const [a, setA] = useState(34);
    const [b, setB] = useState(23);
    const [result, setResult] = useState(0);
    const BASE_URL = process.env.REACT_APP_BACKEND_URL;
    const fetchWelcome = async () => {
        const response = await axios.get(`${BASE_URL}/a5/welcome`);
        setWelcome(response.data);
    }
    const fetchAdd = async () => {
        const response = await axios.get(`${BASE_URL}/a5/add/${a}/${b}`);
        setResult(response.data);
    }
    const fetchSub = async () => {
        const response = await axios.get(`${BASE_URL}/a5/subtract/${a}/${b}`);
        setResult(response.data);
    }
    useEffect(()=> {
        fetchWelcome();
        fetchAdd();
        fetchSub();
    }, []);

    return (
        <>
            <h3>Encoding Parameters In URLs</h3>
            <h4>Integrating React with APIs</h4>
            <h5>Fetching Welcome</h5>
            <h6>{welcome}</h6>
            <h3>Encoding Parameters in URLs</h3>
            <h4>Calculator</h4>
            <input onChange={(e)=>setA(e.target.value)} type="number"
                   className="form-control mb-2" value={a}/>
            <input onChange={(e)=>setA(e.target.value)} type="number"
                   className="form-control mb-2" value={b}/>
            <input type="number" className="form-control mb-2" value={result} readOnly/>
            <h4>Fetch Result</h4>
            <button onClick={()=>fetchAdd(a, b) } className="btn btn-primary mb-2 w-100">
                Fetch sum of {a} + {b}
            </button>
            <button onClick={()=>fetchSub(a, b) } className="btn btn-danger mb-2 w-100">
                Fetch subtraction of {a} - {b}
            </button>
        </>
    );
}

export default EncodingParametersInURLs;