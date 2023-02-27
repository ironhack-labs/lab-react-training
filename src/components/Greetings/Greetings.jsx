import './../Greetings/Greetings.css'


const Greetings = ({ lang, children }) => {


    if (lang === 'de') {
        return (
            <div className='greetings'>
                <p>Hallo {children}</p>
            </div>
        )
    }
    if (lang === 'en') {
        return (
            <div className='greetings'>
                <p>Hellow {children}</p>
            </div>
        )
    }
    if (lang === 'es') {
        return (
            <div className='greetings'>
                <p>Hola {children}</p>
            </div>
        )
    }
    if (lang === 'fr') {
        return (
            <div className='greetings'>
                <p>Bonjur {children}</p>
            </div>
        )
    }

}


export default Greetings