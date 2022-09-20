import './Greetings.css';

function Greetings({ lang, children }) {
    const greeting = (language) => {
        if(language === 'fr') {
            return ( 'Bonjour' )
        } else if (language === 'de') {
            return ( 'Hallo' )
        } else if (language === 'en') {
            return ( 'Hello' )
        } else {
            return ( 'Tía que dicesssss' )
        }
    }

    return (
        <div className='greeting-container'>
            <h4>{greeting(lang)} {children}</h4>
        </div>
    )
};

export default Greetings;