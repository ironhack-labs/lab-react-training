import './Greetings.css'

const Greetings = (props) => {

    const { lang, name } = props;

    if(lang === "de") {
        return <p className='border'>Hallo {name}</p>
    } else if((lang === "en")) {
        return <p className='border'>Hola {name}</p>
    } else if((lang === "en")) {
        return <p className='border'>Hello {name}</p>
    } else if((lang === "fr")) {
        return <p className='border'>Bonjour {name}</p>
    }
}

export default Greetings;