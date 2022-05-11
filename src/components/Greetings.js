import "./styles.css"

const Greetings = (props)=>{
  const {lang, children} = props

  let hello
  switch (lang){
      case "de":
          hello = "Hallo"
          break;
      case "en":
          hello = "Hello"
          break;
      case "es":
          hello = "Hola"
          break;
      case "fr":
          hello = "Bonjour"
          break;
  }

  return (
  <div className="greetings-card">
      <p>{hello} {children}</p>
  </div>)
}

export default Greetings