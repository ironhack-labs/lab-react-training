import './greetings.css';


const Greetings = ({lang, children}) => {
    const renderGreeting = () => {
        if (lang === 'de') {
            return 'Hallo';
        } else if (lang === 'en') {
        return 'Hello'
        } else if (lang === 'es') {
        return 'Hola'
        } else if (lang === 'fr') {
        return 'Bonjour'
        }
    }
    return (
        <div className='Greetings'>
             <p>{renderGreeting()} {children}</p>

        </div>
    
    )

}


export default Greetings;