import React from 'react'

function Greatings(props) {
    let saludos = {
        de:"Hallo",
        fr:"bonjour",
        en:"Hello",
        es:"Hola"
    }
    return (
        <div>
       <p>{saludos[props.idioma]}{props.children}</p>     
        </div>
    )
}
export default Greatings

