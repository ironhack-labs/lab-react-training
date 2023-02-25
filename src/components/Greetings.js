export const Greetings = (props) => {

    

    if (props.lang === "de") {
        return (
            <h1>Hallo Ludweig</h1>
        )
    }
    if (props.lang === "fr") {
        return (
            <h1>Bonjour François</h1>
        )
    }
}