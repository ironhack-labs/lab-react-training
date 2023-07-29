const Gretings = ({lang, children}) => {
    let greting;
    switch (lang) {
        case 'de':
            greting = 'Hallo'; 
            break;
        case 'en':
            greting = 'Hello'; 
            break;
        case 'es':
            greting = 'Hola'; 
            break;
        default:
            greting = 'Bonjour'; 
            break;
    }

    return(
        <div className="gretings">
            <p>{greting} {children}</p>
        </div>
    )
}

export default Gretings;