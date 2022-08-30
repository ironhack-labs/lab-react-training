function Greetings({ lang, children }) {
  let greeting = ""  
  switch(lang) {
      case "de":
        greeting = "Hallo ";
        break;
      case "en":
        greeting = "Hello ";
        break;
      case "es":
        greeting = "Hola ";
        break;
      case "fr":
        greeting = "Bonjour "
        break;
        default: 
        greeting = "Hi"
    }
  return(
    <div className="d-flex border border-dark my-2 ps-1">
      <h6 className='my-1'>{greeting}  {children}</h6>
    </div>

  )
}

export default Greetings;