import React from 'react'

function Greetings(props) {
    const {lang, children} = props;

    const checkLang = (lang) => {

       if (lang === "de") {
            return `Hallo ${children}`
        } else if (lang === "fr") {
            return `Bonjour ${children}`
        } else if (lang === "en") {
            return `Hello ${children}`
        } else if (lang === "es") {
            return `Hola ${children}`
        }
    }
    

return (
    <div class="helloMessage">
        <p>{checkLang(lang)}</p>
    </div>
  )
}


export default Greetings