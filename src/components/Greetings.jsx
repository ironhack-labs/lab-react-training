const Greetings = ({lang, children}) => {
    if (lang === 'de'){
        return `Hallor ${children}`
    }
    if (lang === 'fr'){
        return `Bonjour ${children}`
    }
    if (lang === 'es'){
        return `Hola ${children}`
    }
    if (lang === 'en'){
        return `Hello ${children}`
    }
    
}

export default Greetings;