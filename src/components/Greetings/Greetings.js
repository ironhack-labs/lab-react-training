import './Greetings.css'

const Greetings = props => {

    const { lang } = props

    if (lang === 'de') {
        return (
            <div className='greetings'>
                Hallo {props.children}
            </div>)

    } else if (lang === 'en') {
        return (
            <div className='greetings'>
                Hi {props.children}
            </div>)

    } else if (lang === 'es') {
        return (<div className='greetings'>
            Hola {props.children}
        </div>)

    } else {
        return (<div className='greetings'>
            Bonjour {props.children}
        </div>)
    }

}

export default Greetings


