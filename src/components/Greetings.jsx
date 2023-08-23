function Greetings (props){
    const {lang, children} = props;

    function langGreet (){

        if (lang === "de"){
            return 'Hallo';
        }
        else if (lang === 'es'){
             return 'hola';
        }
        else if (lang === 'en'){
            return 'Hello';
        }
        else if (lang === 'fr'){
            return 'Bonjour';
       }
    }

    return(
        <div>
        <p>{langGreet()} {children}</p>
        
        </div>
        
    )
}

export default Greetings;