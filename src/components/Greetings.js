import React from 'react'

const Greetings = (props) => {
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
        default:
            hello = "No language selected"
            break;
    }

  return (
    <div  className="greetings" >
      <p>{hello} {children}</p>
  </div>)
  
}

export default Greetings