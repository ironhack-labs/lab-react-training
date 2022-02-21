const Greetings = props => {

const {lang, children} = props
let salute = ""
if (lang === "de") {
    salute = "Hallo"
}
if (lang === "en") {
    salute = "Hello"
}
if (lang === "es") {
    salute = "Hola"
}
if (lang === "fr") {
    salute = "Bonjour"
}

    return (<>

 <h3>  {salute} {children} </h3>




    </>)
}


export default Greetings;