function Greetings({lang, children}){
    function languaje(lang){
        if (lang === 'de'){
            return "Hallo Ludwig"
        } else if (lang === 'fr'){
            return "Bonjour monsieur"
        } else if (lang === 'en'){
            return "Hello friend"
        } else if (lang === 'es'){
            return "Hola amigo"
        } return "no hay lenguaje"
    }

    return (
        <>
            <h3>{languaje(lang)}</h3>
        </>
    )
}

export default Greetings;