// import('./greeting.css')
function Greetings({ children, lang }) {

    let msg = ""

    switch (lang) {
        case "fr":
            msg = "Salut " + children
            break;
        case "de":
            msg = "Hallo " + children
            break;
        default:
            console.log(``);
    }

    return (
        <div>
            <p>{msg}</p>
        </div>

    )
}


export default Greetings