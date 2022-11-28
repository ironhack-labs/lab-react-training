
const Greetings = props => {

    const { lang, children } = props

    const lan = elm => {

        switch (elm) {
            case "de":
                return "Hallo"
                break

            case "fr":
                return "Bonjour"
                break
        }
    }

    return (
        <div>
            <p className="Idcard"> {`${lan(lang)} ${children}`}</p>
        </div>

    )

}
export default Greetings