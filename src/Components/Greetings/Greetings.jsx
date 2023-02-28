import './Greetings.css'

const Greetings = ({ lang, children }) => {

    let greet

    

    if (lang === 'en') { greet = 'Hello' }
    else if (lang === 'fr') {
        greet = 'Salut'
    }
    else if (lang === 'es') {
        greet = 'Hola'
    }
    else if (lang === 'de')
        greet = 'Hallo'

    return (
        
        <div className='Greetings'>
            <p>{greet} {children}</p>
        </div>

    )

}
export default Greetings