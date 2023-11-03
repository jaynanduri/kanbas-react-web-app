function PassingDataOnEvent() {
    const add = (a, b) => {
        alert(`${a} + ${b} = ${a + b}`);
    }
    return (
        <>
            <h2>Passing Data on Event</h2>
            <button onClick={() => add(2, 3)} className="btn border btn-light">Press to add 2 and 3</button>
        </>
    );
}

export default PassingDataOnEvent;