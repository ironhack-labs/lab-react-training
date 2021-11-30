function Greetings({lang}) {

    const greeting = (l) => {
        if (l === "de") return "Ludwig"
        if (l === "fr") return "François"
        if (l === "es") return "José"
        if (l === "en") return "Tom"
    }
    return (
        <div className="wrapper">
            <span>{greeting(lang)}</span>
        </div>
    );
}

export default Greetings;