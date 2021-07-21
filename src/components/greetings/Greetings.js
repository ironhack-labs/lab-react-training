const text = {
    de: 'Hallo',
    en: 'hello',
    fr: 'bonjour'
}

function Greetings(props) {
    return(
        <div className="border border-dark">
            {text[props.lang]} {props.children}
        </div>
    )
}

export default Greetings