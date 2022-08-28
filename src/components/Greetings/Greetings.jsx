import './Greetings.css'

function Greetings({ lang, children }) {

  let greeting = ""

  if (lang === "de") {
    greeting = "Hallo"
  } else if (lang === "en") {
    greeting = "Hello"
  } else if (lang === "es") {
    greeting = "Hola"
  } else {
    greeting = "Bounjour"
  }
  
  return(
    <div className='container-box'>
      <h2 className='p-2'>{greeting} {children}</h2>
    </div>
  )
}

export default Greetings