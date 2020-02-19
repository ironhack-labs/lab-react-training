import React from 'react'
import styled from 'styled-components'


const CreditCard  = (props) =>{
//Creamos una consts image la cual recibe el tipo con referencia a la tarjeta
//Visa o Mc y si es una regresa Una imagen sino la otra
const image = props.type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg'


//El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.
//El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
//El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
    const numeros = `**** **** **** ${props.number.split('').splice(12,4).join('')}`


    const Card = styled.article`
    border-radius: 4px;
    background-color: ${props.bgColor};
    width: 200px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 30px;
        align-self: flex-end;
    }
    h6 {
        color: ${props.color};
        font-size: 10px;
        margin: 40px 0 15px 0;
    }
    div {
        display: flex;
        justify-content: space-between;
        width: 80%;
    }
    p {
        color: ${props.color};
        font-size: 15px;
        padding: 5px 0;
        width: 90%;
    }
`

return (
    <Card>
        <img src={image} alt='card type'/>
        <h6>{numeros}</h6>
        <div>
            <p>Expires: {props.expirationMonth}/{props.expirationYear}</p>
            <p>{props.bank}</p>
        </div>
        <p>{props.owner}</p>
    </Card>
)
} 




export default CreditCard