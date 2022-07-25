

function Greetings(props){
    const{lang, children} = props;
    let greeting;
    switch(lang){
        case "de":
            greeting = "Hallo, Guten Tag!"
            break;
        case "en":
            greeting = "Hello!"
            break;
        case "es":
            greeting = "Hola!"
            break;
        case "fr":
            greeting = "Bonjour!"
            break;
        default: break
    }

    return(
        <div className="border">
            <p>{greeting} {children}</p>
        </div>
    )

}

export default Greetings;