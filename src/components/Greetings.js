
function greetings(props){
 const { lang,children} = props  
    return(
        <div>
            {lang === "de" ? 
                (<div className="border">Hallo {children}</div>)
            : lang === "es" ? 
                (<div className="border">Hola {children}</div>)
            : lang === "fr" ? 
                (<div className="border">Bonjour {children}</div>)
           : lang === "en" ? 
                (<div className="border">Hello {children}</div>)
                : (
              <div >No</div>
            )   
            }

        </div>
    )
}




export default greetings