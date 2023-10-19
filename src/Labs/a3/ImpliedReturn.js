function ImpliedReturn() {
    const multiply = (a, b) => a * b;
    const fourTimesFour = multiply(4, 5);
    console.log(fourTimesFour);
    return (
        <>
            <h2>Implied return</h2>
            fourTimesFour = {fourTimesFour}<br/>
            multiply(4, 5) = {multiply(4, 5)}<br/>
        </>
    );
}

export default ImpliedReturn;