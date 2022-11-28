function Greetings(props) {

    const { lang, children } = props
    const lan = elem => {


        switch (elem) {

            case "de":
                return "Hallo"
                break
            case "en":
                return "Hello"
                break
            case "es":
                return "Hola"
                break
            case "fr":
                return "Bonjour"
                break
        }
    }

    return (
        <div>

            <h3>{lan(lang)} {children}</h3>


        </div>
    )


}

export default Greetings