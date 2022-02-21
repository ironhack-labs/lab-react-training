import './Greetings.css'

const Greetings = (props) => {
    console.log(props)

    const { lang } = props
    const name = props.children

  let hi = ''

    if (lang === 'de') {
        hi = 'Hallo'
    }

    if (lang === 'fr') {
        hi = 'Bonjour'
    }

    return (
        <article>
           <p>{hi} {name}</p>         
        </article>
    )
}

export default Greetings