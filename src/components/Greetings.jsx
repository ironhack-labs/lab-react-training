import React from 'react'

function Greetings(props) {
    const {lang, children} = props
    if (lang === "en") {
        return (
            <div className='greetings'>
              <p>Hello {children}!</p>
            </div>
          )
    } else {
        return (
            <div className='greetings'>
                <p>Bonjour {children}!</p>
            </div>
        )
    }

}

export default Greetings