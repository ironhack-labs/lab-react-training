
function Greetings(props) {

    const lenguages = {
        de: 'Hallo',
        en: "Jelous",
        es: 'Holi mamahue',
        fr: 'Bonjour'
    }
    return(
        <div className="ms-5 mt-2 container">
            <p>{lenguages[props.lang]} {props.children}</p>
        </div>
    )
}
export default Greetings