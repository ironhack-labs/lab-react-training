// import './Greetings.css'

// function 
function Greetings(props) {

    const {lang, children} = props

    let saludo = ''
    switch(lang){
        case 'de': saludo = 'hallo';
        break;
        case 'en': saludo = 'hello';
        break;
        case 'es': saludo = 'hola';
        break;
        case 'fr': saludo = 'salut';
        break;
    }
    return (
        <div>
            {lang}
            {children}
        </div>
    )
}

export default Greetings