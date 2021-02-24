import React from 'react'
import {useState} from 'react'


export default function Greetings(props) {
    const [idioma, setIdioma] = useState ('es')

    function changeLan (idioma) {
      if (idioma==='en') {
        return 'Hello'
      } else if (idioma==='de') {
        return 'Hallo'
      } else if (idioma==='fr') {
        return 'Bonjour'
      } else {return 'Hola'}
    }
  return (
    <div style={{border: '1px solid', marginBottom: '10px'}}>
    
    <p>{changeLan(props.idioma)} {props.children}</p>
    </div>
  )
}
