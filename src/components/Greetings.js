function Greetings(props){
    let msg = '';
    if(props.lang == 'de'){
        msg = "Hallo"
    }else if(props.lang == 'en'){
        msg = "Hello"
    }else if(props.lang == 'es'){
        msg = "Hola"
    }else if(props.lang == 'fr'){
        msg = "Bonjour"
    }
    
    return(
        <h1 id="greeting">{msg} {props.children}</h1>
    )
}

export default Greetings;