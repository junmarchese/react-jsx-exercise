function Person({ name, age, hobbies }) {
    const displayName = name.length > 8 ? name.slice(0, 6) + "..." : name;

    return(
        <div className="person">
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {displayName}</li>
                <li>Age: {age}</li>
                <li>Hobbies:</li>
                <ul>
                    {hobbies.map((hobby, index) => (
                        <li key={index}>{hobby}</li>
                    ))}
                </ul>
            </ul>
            <h3 className={age >= 18 ? "vote-message green" : "vote-message red"}>
                {age >= 18 ? "please go vote!" : "you must be 18"}
            </h3>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Person Profile</h1>
            <Person name="Jack" age={30} hobbies={["working out", "coding", "fixing vintage cars"]} />
            <Person name="Jill" age={28} hobbies={["baking", "yoga", "blogging"]} />
            <Person name="Jessie" age={5} hobbies={["singing", "dancing", "drawing"]} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));