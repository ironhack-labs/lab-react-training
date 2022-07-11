import './Greetings.css'

let word
const Greetings = ({ lang, children }) => {
    switch (lang) {
        case 'de':
            word = 'hallo'
            break
        case 'es':
            word = 'hola'
            break
        case 'en':
            word = 'hello'
            break
        case 'fr':
            word = 'salut'
            break

    }

    return (
        <>
            <p> {word} {children} </p>
        </>
    )
}


export default Greetings