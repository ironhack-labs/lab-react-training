import './greeting.css'

function Greetings({lang, children}){;
    const saludo = {
        de: 'Hallo',
        en: 'Hello',
        es: 'Hola',
        fr: 'Salut'
    };
    let text = saludo[lang] || 'hola';
    return(
        <div className='greeting'>    
    {text}
    {children}
    </div>
)
}

export default Greetings