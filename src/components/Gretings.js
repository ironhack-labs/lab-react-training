const Gretings = ({ lang, children }) => {

    const traslation = (langChoice) => {

        let options = {
            'de': 'hallo',
            'fr': 'Bonjour',
            'es': 'Hola',
            'en': 'Hello'
        }

        return options[langChoice] || '⚠️The language is unknown to me 🤔';

    }

    return(
        <div className="Gretings border my-2" style={{ 'max-width': '800px', 'margin': '0 auto' }}>
            <h3> 
                { traslation(lang) } { children }
           </h3>
        </div>

    )
}

export default Gretings