function Greetings({lang, children}) {
    const chooseGreeting = (lang) => {
        if (lang==="de") {
            return "Hallo"
        }
        if (lang==="fr") {
            return "Bonjour"
        }
        else return "Nothing"
    };
    return <div>
        <p>{chooseGreeting(lang)} {children} </p>
    </div>
}

export default Greetings;