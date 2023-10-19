function JsonStringify() {
    const squares = [1, 4, 16, 25, 36];
    return (
        <>
            <h2>JSON Stringify</h2>
            squares = {JSON.stringify(squares)}<br/>
        </>
    );
}

export default JsonStringify;