
export default function Greetings(props) {


  return(
    <div>
      {
        props.lang === "en" ? <p>Hello</p> : props.lang === "de" ? <p>Hallo</p> :  props.lang === "es" ? <p>Hola</p> : <p>Bonjour</p>
      }

    </div>
  )
}
