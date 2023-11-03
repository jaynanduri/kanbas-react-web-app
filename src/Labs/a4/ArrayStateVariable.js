import Raect, {useState} from "react";

function ArrayStateVariable(){
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random()*100)]);
    };

    const deleteElement = (index) => {
        setArray(array.filter((item, i)=> i !== index));
    };

    return (
        <>
            <h2>Array State Variable</h2>
            <button onClick={addElement} className={"btn btn-success border"}>Add Element</button>
            <ul className={"list-group"}>
                {array.map((item, index)=> (
                    <li className={"list-group-item"} key={index}>
                        {item}
                        <button className={"btn btn-danger float-end border"} onClick={()=>(deleteElement(index))
                        }>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );

}

export default ArrayStateVariable;