import './Greetings.css'

const Greetings = ({ lang, children }) => {
    let language
    if (lang === 'en') {
        language = 'Hello'

    } else {
        language = 'Hola'
    }

    return (
        <div className='greetings'>
            <h2>{language}! {children}</h2>
        </div>
    )

}

export default Greetings