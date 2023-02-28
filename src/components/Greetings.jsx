import React from 'react'

function Greetings(props) {

    const {lang, children} = props;

            console.log(children)

  return (
    <div>
       
         <div>

            {lang === 'de' && <p>Hallo {children}</p>}
            {lang === 'fr' && <p>Bonjour {children}</p>}

         </div>
        
        

    </div>
  )
}

export default Greetings