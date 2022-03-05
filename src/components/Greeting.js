function Greetings(props) {
    console.log(props);
    const de = "Hallo";
    const en = "Hello";
    const es = "Hola";
    const fr = "Bonjour";
    
    if (props.lang === "de"){
        return <div>{de} {props.children}.</div>
    } else if (props.lang === "en"){
        return <div>{en} {props.children}.</div>
    } else if (props.lang === "es"){
        return <div>{es} {props.children}.</div>
    } else if (props.lang === "fr"){
        return <div>{fr} {props.children}.</div>
    }
    else;
}

export default Greetings