
const Greetings = (props) => {
    let say;
    switch (props.lang) {
        case 'de':
            say = 'Hallo'
            break
        case 'en':
            say = 'Hello'
            break
        case 'es':
            say = 'Hola'
            break
        case 'fr':
            say = 'Aló'
            break
    }
    return <div className="say">
        <p>{say} {props.children}</p>
    </div>

}

export default Greetings