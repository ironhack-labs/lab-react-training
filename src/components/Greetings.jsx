function Greetings(props){
    const {lang, children} = props
    let salutation 
    
    // decide the greeting word accoding to the chosen language
    if (lang === "de"){
        salutation = "Hallo"
    } else if (lang === "es") {
        salutation = "Hola"
    } else if (lang === "fr") {
        salutation = "Bonjour"
    } else if (lang === "en") {
        salutation = "Hello"
    }

    return(

        <div className="card">
            <div className="cardbody">
                <p>{salutation} {children}</p>
            </div>
        </div>

        )
}

export default Greetings