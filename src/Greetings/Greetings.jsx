import './Greetings.css'

const Greetings = ({ lang, children }) => { 

    let language
        if (lang === 'fr' ){
          language = 'Bonjour' 
        } if (lang === 'de' ){
         language = 'Hallo'
        }

    return (
    <article className='card'>
        <p> {language} {children}</p>
    </article>
    )
}

export default Greetings
