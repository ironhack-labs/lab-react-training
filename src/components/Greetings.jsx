import React, { Children } from 'react'

function Greetings(props) {
    const {lang} = props

    function language(language){
        if(language === "de"){
            return "Hallo"
        }else if(language === "fr"){
            return "Bonjour"
        }
        
    }




  return (
    <div>
<h6>{language(lang)} {props.children}</h6>
    </div>
  )
}

export default Greetings