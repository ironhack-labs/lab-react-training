import React from 'react'

const Greetings = (props) => {
  let greet

  switch (props.language) {
    case 'de':
      greet = 'hallo '
      break
    case 'en':
      greet = 'hello '
      break
    case 'es':
      greet = 'hola '
      break
    case 'fr':
      greet = 'bonjour'
      break
    default:
      greet = 'hey babe '
  }
  return (
    <div>
      {greet}
      {props.children}
    </div>
  )
}

export default Greetings

//Iteration 2: Component: Greetings
//Create a Greetings component with 2 props:

//lang: A string that could be ,"de","en","es","fr"
//children: A text
//Example

//<Greetings lang="de">Ludwig</Greetings>
//<Greetings lang="fr">François</Greetings>
