function Greetings(props) {
    console.log(props);

    let greeting = "";

    if (props.lang === "de") {
        greeting = "Hallo";
    } else if (props.lang === "fr") {
        greeting = "Bonjour";
    }

    return (
        <div className="greetings">
            <p>{greeting} {props.children}</p>
        </div>
    );
}

export default Greetings;
