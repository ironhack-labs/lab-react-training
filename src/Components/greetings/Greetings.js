import './Greetings.css'

const Greetings = (props) => {

    const { lang, children } = props
    let greeting = ""

    if (lang === "de") {
        greeting = "Hallo"
    } else if (lang === 'fr') {
        greeting = 'Bonjour'
    }

    return (
        <div className='greetings'>
            <p>{greeting} {children}</p>
        </div>


    )
}
export default Greetings