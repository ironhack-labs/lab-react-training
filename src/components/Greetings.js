function Greetings(props){

    return (
        <>
            { props.lang === "de" && <> Hallo  </>}
            { props.lang === "en" && <> Hello </>}
            { props.lang === "es" && <> Hola </>}
            { props.lang === "fr" && <> Bonjour </>}
            { props.children }
        </>
    )

}

export default Greetings