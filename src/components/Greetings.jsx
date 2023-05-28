
function Greetings(props) {
    let language = props.lang
    let children = props.children
    let greeting = ""
    if(language === "de"){
        greeting = "Hallo"
    }else if(language === "fr"){
        greeting = "Bonjour"
    }

   
    return (
    <div className="langdiv">
        <p>{greeting}, {children}</p>
    </div>
  )
}

export default Greetings
