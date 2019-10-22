import React from "react";
import '../css/style.css'

const Greetings = (props) => {
  let { lang } = props;
  let result = (lang) =>
    lang === 'de' ? 'Hallo'
      : lang === 'fr' ? 'Bonjour'
        : 'Hi'

  // function greeting(lang) {
  //   if (lang === "de") {
  //     return "Hallo"
  //   } else {
  //     return "Hi"
  //   }
  // }

  let greetings = result(lang);

  return (
    <div className="box">
      <b> {greetings}
        {props.children} </b>

    </div>
  )

};

export default Greetings;