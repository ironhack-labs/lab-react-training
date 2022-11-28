import './Greetings.css'

const Greetings = props => {
  const { lang, children } = props

  switch (lang) {
    case 'de':

      return (
        <article className='Greetings'>
          <p>Hallo {children}</p>
        </article>
      )
      break
    case 'fr':

      return (
        <article className='Greetings'>
          <p>Bonjour {children}</p>
        </article>
      )
      break
  }
}

export default Greetings