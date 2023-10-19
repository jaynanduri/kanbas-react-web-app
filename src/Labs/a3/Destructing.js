function Destructing() {
    const person = {name: "John", age:25};
    const {name, age} = person;
    const numbers = ["one", "two", "three"];
    const [first, second, third] = numbers;

    return(
        <>
            <h2>Destructing</h2>
            <h3>Object Destructing</h3>
            const &#123; name, age &#125; = {JSON.stringify(person)}<br/>
            name = {name}<br/>
            age = {age}<br/>
            <h3>Array Destructing</h3>
            const [first, second, third] = {JSON.stringify(numbers)}<br/>
            first = {first}<br/>
            second = {second}<br/>
            third = {third}
        </>
    );
}

export default Destructing;