import "./Greetings.css"

function Greetings(props) {
    console.log(props)
    let language = props.lang
    let children = props.children
    let greeting = ""
    if(language === "de"){
        greeting = "Hallo "
    }else if(language === "fr"){
        greeting = "Bonjour "
    }
    return(
        <div className="container">
            <p className="border">{greeting} {children}</p>
        </div>
    )
}

export default Greetings