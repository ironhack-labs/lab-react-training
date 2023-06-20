function Greetings({lang, Name}){
    if(lang === 'fr'){
        return <p>Bonjour, {Name}</p>
    }else if(lang ==="en"){
        return <p>Hello, {Name}</p>
    }else if(lang === 'es'){
        return <p>Ola, {Name}</p>
    }else if(lang === 'de'){
        return <p>Guten Tag, {Name}</p>
    }else{
        return <p>Hey, {Name}</p>
    }
}
export default Greetings