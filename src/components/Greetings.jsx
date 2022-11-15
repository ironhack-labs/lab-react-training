import React from "react";

function Greetings(props){
    const {lang, children} = props;

    function checkLang (lang) {
        if(lang === "de") {
       
        return "Hallo"
        } else if( lang === "en") {
            return "Hello"
        
        } else if ( lang === "es") {
            return "Hola!"
        } else {
            return "Bonjour"
        }
    }

return(
    <div>
    <p class="greeting">{checkLang(lang)} {children}</p>
</div>
)

}
export default Greetings