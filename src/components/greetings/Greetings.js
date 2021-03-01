function Greetings({lang, children}){

    let greet = ''

    switch (lang){
        case ('de'):
            greet = 'Hallo'
            break;
        case ('fr'):
            greet = 'Bonjour'
            break;
        case ('es'):
            greet = 'Hola'
            break;
        case ('en'):
            greet = 'Hello'
            break;
        default:
            greet = ''          
    }

    return(
        <div className="border border-dark m-2"> 
            <h3>{greet}, {children}</h3>          
        </div>
        )
}

export default Greetings;