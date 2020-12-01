import React from 'react'

export default function Greetings(props) {
    return (
        <div>
            {(() => {
        switch (props.lang) {
          case "de":   return "Hallo";
          case "en": return "Hello" ;
          case "fr":  return "Bonjour";
          case "es":  return "Hola" ;
        }
      })()}
      {" "+props.children}
        </div>
    )
}
