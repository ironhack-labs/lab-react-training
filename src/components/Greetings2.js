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
      <button className="btn"  onClick={ () => DeGreeting() }>Alemán</button>
      <button className="btn" onClick={ () => EsGreeting() }>Español</button>
      <button className="btn" onClick={ () => FrGreeting() }>Francés</button>
      <button className="btn" onClick={ () => EnGreeting() }>Inglés</button>
    </>
  )
}
