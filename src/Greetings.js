const Greetings = (props => {
    const {lang, children} = props;
    const translate = (lang) => {
        if (lang === "de") return "Hallo";
        else if (lang === "fr") return "Bonjour";
        else if (lang === "fr") return "Bonjour";
        else if (lang === "fr") return "Bonjour";
        else return null;
    }
    return (
        <div className="greetings-container">
        <p>
            {translate(lang)}{children}
        </p>
        </div>
    )
})
export default Greetings;