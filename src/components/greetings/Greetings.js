import React, {Component} from 'react'
import '../greetings/Greetings.css'

// lang: A string that could be ,"de","en","es","fr"
// children: A text

class Greetings extends Component {

  render(){
    const hello = {
      "de": "Hallo",
      "en": "Hello",
      "es": "Hola",
      "fr": "Bonjour",
    }
    const {lang, children} = this.props
    return(
      <div className="greeting" lang={lang}>{hello[lang]} {children}</div>
    )
  }
}

export default Greetings