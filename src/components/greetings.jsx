function Greetings({ lang, children }) {
    let message;
    if (lang === 'en') {
        message = "Hellow";
    }
    if (lang === 'de') {
        message = "Hallo";
    }
    if (lang === 'es') {
        message = "Hola";
    }
    if (lang === 'fr') {
        message = "Bonjour";
    }
    return (
        <div className="border-dark border p-1 ps-2 m-2 text-start">{message} {children}</div>
    )
}

export default Greetings;