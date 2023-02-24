import React from 'react'
import './styles/Greetings.css'

export const Greetings = ({lang, children}) => {

    if (lang === "de") return `Hallo ${children}`
    if (lang === "fr") return `Bonjour ${children}`
    if (lang === "es") return `Hola ${children}`
    if (lang === "en") return `Hello ${children}`

  return (
    <div>
        <h1>
            Greetings
        </h1>
            <p className='text1'>
                <Greetings lang={"de"}>Ludwig</Greetings>
            </p>

            <p className='text1'>
                <Greetings lang={"fr"}>Francois</Greetings>
            </p>

            <p className='text1'>
                <Greetings lang={"es"}>Aitor</Greetings>
            </p>

            <p className='text1'>
                <Greetings lang={"en"}>John</Greetings>
            </p>

            
    </div>
  )
}
