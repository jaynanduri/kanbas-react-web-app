function ClickEvent() {
    const helloWorld = () => {
        alert("Hello World!");
    };

    const good = () => {
        alert("Life is Good!");
    };

    return (
        <>
            <h2>Click event</h2>
            <button className="btn btn-light border m-1" onClick={helloWorld}>Click Hello1</button>
            <button className="btn btn-light border m-1" onClick={()=>helloWorld()}>Click Hello1</button>
            <button className="btn btn-light border m-1" onClick={()=>{
                helloWorld();
                good();
            }
            }>Click button3</button>
        </>
    );
}

export default ClickEvent;