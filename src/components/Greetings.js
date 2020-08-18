import React, {Component} from 'react'

class Greetings extends Component{
  constructor (props){
    super(props)
    this.greetings={
      en: 'Hello',
      es: 'Hola',
      de: 'Hallo',
      fr: 'Bonjour'
    }
  }

  render(){
    return(
      <div className='iteration-card'>
        <p>{this.greetings[this.props.lang]} {this.props.children}</p>
      </div>
    )
  }


}

export default Greetings