function Greetings(props) {
    const { lang, children } = props;

    const langObj = {
        de: "Hallo",
        en: "Hello",
        es: "Hola",
        fr: "Bonjour",
    };

    return (

        <div className="languages">
            <p> {langObj[lang]} {children} </p>

        </div>

    )
}


export default Greetings;