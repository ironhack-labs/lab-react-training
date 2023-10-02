function Greetings({ lang, children }) {
    const messages = { 'en': "Hellow", 'de': "Hallo", 'es': "Hola", 'fr': "Bonjour" };
    return (
        <div className="border-dark border p-1 ps-2 m-2 text-start">{messages[`${lang}`]} {children}</div>
    )
}

export default Greetings;