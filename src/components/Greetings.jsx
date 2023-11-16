function Greetings(props) {
    const {lang, children} = props;

    const greetings = {
    en: 'Hello',
    de: 'Guten Tag',
    es: 'Hola',
    fr: 'Bonjour',
    vn: 'Xin chao',
    }
    
    return(
        <div className="Greetings">
            <p>{greetings[lang]} - {children}</p>
        </div>
    )
}

export default Greetings;