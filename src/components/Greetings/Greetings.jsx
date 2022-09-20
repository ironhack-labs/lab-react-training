import './Greetings.css'

const Greetings = (props) => {

    if(props.lang === 'fr'){
        return (            
            <>  
                <div className="box">
                        Bonjour {props.children}
                </div>
            </>    
        )
    } else if(props.lang === 'de'){
        return (
            <>  
            <div className="box">
                    Hallo {props.children}
            </div>
            </>
        )
    } else if(props.lang === 'en'){
        return (
            <>  
            <div className="box">
                    Hello {props.children}
            </div>
            </>
        )
    } else if(props.lang === 'es'){
        return (
            <>  
            <div className="box">
                    Hola {props.children}
            </div>
            </>
        )
    } else {
        return(
            <>  
            <div className="box">
                    Unknown language
            </div>
            </> 
        )
    }
}

export default Greetings;