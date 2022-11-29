const Greetings = props => {

    const { lang, children } = props

    switch (lang) {
        case "de":
            return (<p>"Hallo {children}"</p>)
            break;
        case "en":
            return (<p>"Hello {children}"</p>)
            break;
        case "es":
            return (<p>"Hola {children}"</p>)
            break;
        case "fr":
            return (<p>"Bonjour {children}"</p>)
            break;
        default:
            break;
    }

    return (

        <p>{lang} {children}</p>





    )

}

export default Greetings