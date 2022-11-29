import './greetings.css'


const Greetings = props => {

    const { lang, children } = props
    const idioms = lang => {
        switch (lang) {
            case "de":
                return 'hallo'
                break;
            case "fr":
                return 'Bonjour'
                break;
            case "es":
                return 'hola'
                break;
            case "en":
                return 'hello'
        }
    }
    return <div>

        <h3> {idioms(lang)} {children}</h3>
    </div>








}
export default Greetings