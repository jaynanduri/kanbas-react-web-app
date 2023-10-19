function FunctionDestructing() {
    const add = (a, b) => a + b;
    const sum = add(1, 2);
    const subtract = ({a, b}) => a - b;
    const diff = subtract({a:4, b:2});
    return (
        <>
            <h2>Function Destructing</h2>
            const add = (a, b) =&gt; a + b; <br/>
            const sum = add(1, 2); <br/>
            const subtract = (&#123; a, b &#125;) =&gt; a - b; <br/>
            const difference = subtract({JSON.stringify({a:4, b:2})};<br/>
            const sum = {sum}<br/>
            difference = {diff}
        </>
    );
}

export default FunctionDestructing
