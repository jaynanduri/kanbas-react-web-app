function TernaryOperator() {
    let loggedIn = true;
    return (
        <div>
            <h2>Logged in</h2>
            {loggedIn ? <p>Welcome</p> : <p>Please login</p>}
        </div>
    );
}

export default TernaryOperator;