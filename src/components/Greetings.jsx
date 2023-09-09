import '../styles/Greetings.css'

function Greetings(props) {
    return (
        <div className='Greetings'>
            {props.lang==='de' && <p>Hallo {props.children}</p>}
            {props.lang==='en' && <p>Hi {props.children}</p>}
            {props.lang==='es' && <p>Hola {props.children}</p>}
            {props.lang==='fr' && <p>Bonjour {props.children}</p>}
        </div>
    )
}

export default Greetings