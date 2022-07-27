export const Greetings = ({lang,children}) => {
    console.log(children)


    function languageSelector(lang){
        switch(lang) {
            case "de":
              return "Hallo"
              
            case "en":
              return "Hello"
            
            case "es":
                return "Hola"

            case "fr":
              return "Bonjour"
          }
    }

    return (
<div>

{/* condition ? exprIfTrue : exprIfFalse 
"de", "en", "es" or "fr" */
}
<p>{languageSelector(lang)} {children}</p>



</div>


    )
}