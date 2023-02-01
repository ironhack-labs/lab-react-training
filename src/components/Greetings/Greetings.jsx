
const language = (l) => {
    switch(l){
        case 'es':
            return 'Hola'
        case 'en':
            return 'Hello'
        case 'de':
            return 'Hallo'
        default:
            return 'Bonjour'
        }
}

const Greetings = ({lang,...props}) => {
    console.log(props)
    return(
        <div>
            <p>{language(lang)+' '+props.children}</p>
        </div>
    );
};

export default Greetings;