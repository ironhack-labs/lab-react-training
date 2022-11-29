import './Greetings.css'

const Greetings = props => {

    switch (props.lang) {
        case 'de':
            return <h1> Hallo {props.children} </h1>
        case 'fr':
            return <h1> Bonjour {props.children} </h1>

    }
}

export default Greetings





