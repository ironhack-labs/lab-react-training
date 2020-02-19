import React from 'react'

const BoxColor = (props) =>{

    const hexadecimal = (e) =>{
        //Devuelve una cadena que representa al objeto Number especificado
        //Un entero entre 2 y 36 especificando la base a usar para representar los valores numéricos.
        const hexa = e.toString(16)
        return hexa.length === 1 ? '0' + hexa 
        : hexa
    }

    //https://css-tricks.com/converting-color-spaces-in-javascript/
    const rgbToHexa = (r, g, b) =>{
        return "#" + hexadecimal(r)+ hexadecimal(g) + hexadecimal(b)
    }


    return(
        <article style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
            {/* en un parrafo retornas rgb en el siguiente hexa */}
            <p>rgb({props.r},{props.g},{props.b})</p>
            
            <p>{rgbToHexa(props.r, props.g, props.b)}</p>
        </article>
    )


}


export default BoxColor