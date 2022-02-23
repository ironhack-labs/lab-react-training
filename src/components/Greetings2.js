import { useState } from "react"

export default function Greetings(props) {

  const [saludo, useSaludo] = useState({
    saludo: ""
  })

  const DeGreeting = () => {
    useSaludo({
      saludo: "Hallo user"
    })
  }
  const EsGreeting = () => {
    useSaludo({
      saludo: "Hola user"
    })
  }
  const EnGreeting = () => {
    useSaludo({
      saludo: "Hello user"
    })
  }
  const FrGreeting = () => {
    useSaludo({
      saludo: "Bonjour user"
    })
  }

  return(
    <>
      <div>
          <p className="saludouser">{saludo.saludo}</p>
      </div>
      <button className="btn"  onClick={ () => DeGreeting() }>German</button>
      <button className="btn" onClick={ () => EsGreeting() }>Spanish</button>
      <button className="btn" onClick={ () => FrGreeting() }>French</button>
      <button className="btn" onClick={ () => EnGreeting() }>English</button>
    </>
  )
}
