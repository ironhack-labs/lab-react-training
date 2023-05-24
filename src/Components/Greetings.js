
function Greetings(props) {
const {lang, children} = props;

    function chooseLanguage(lang) {
        if(lang === 'en') {
            return <p>Hello</p>
        }
        else if(lang === 'de') {
            return <p>Hallo</p>
        }
        else if(lang === 'es') {
            return <p>Hola</p>
        }
        else if(lang === 'fr') {
            return <p>Bonjour</p>
        }
    }

  return (
    <div>
        {chooseLanguage(lang)} {children}
    </div>
  )
}

export default Greetings