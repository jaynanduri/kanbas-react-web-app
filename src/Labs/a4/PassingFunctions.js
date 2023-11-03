function PassingFunctions({theFunction}) {
    // this functions takes a function as an argument.
    return (
        <>
            <h2>Passing Function</h2>
            <button className="btn btn-light border" onClick={theFunction}>Invoke function</button>
        </>
    );
}

export default PassingFunctions;