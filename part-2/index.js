function Tweet({ username, name, date, message }) {
    return (
        <div className="tweet">
            <p>
                <strong>{name}</strong> (@{username})
            </p>
            <p>
                {date} - {message}
            </p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Recent Tweets</h1>
            <Tweet
                username="applepie"
                name="Apple Pie"
                date="Oct 1, 2024"
                message="This is my first tweet! Go React!"
            />
            <Tweet
                username="pecanhollow"
                name="Pecan Hollow"
                date="Nov 1, 2024"
                message="This is my second tweet! React is fun!"
            />
            <Tweet
                username="peargrove"
                name="Pear Grove"
                date="Dec 1, 2024"
                message="This is my third tweet! React is dynamite🧨 for web-dev!"
            />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));