function Greetings (props){
  
    if(props.lang === "de"){
        return(
            <div className="gretting">
                <p>Hallo {props.children}</p>
            </div>
        )
    }
    else if(props.lang === "fr"){
        return(
            <div className="gretting">
                <p>Bonjour {props.children}</p>
            </div>
        )
    }
    else if(props.lang === "en"){
        return(
            <div className="gretting">
                <p>Hello {props.children} </p>
            </div>
        )
    }
    else if(props.lang === "es"){
        return(
            <div className="gretting">
                <p>Hola {props.children}</p> 
            </div>
        )
    }
    

   
}
export default Greetings