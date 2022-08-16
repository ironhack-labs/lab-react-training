import React from 'react'

function Greetings(props) {
  let { lang, children } = props;
  switch (lang) {
    case "de":
      lang = "Hallo";
      break;
    case "fr":
      lang = "Bonjour";
      break;
    default:
      return "idjklgwn";
  }
  return (
    <div className="greetings">
      <p>{lang} {children}</p>
    </div>
  )
}

export default Greetings