import '../style/Greeting.css'

function Greetings(props) {

    let greet;
    if (props.lang === 'de') {
        greet = 'Hallo'
    } else if (props.lang === 'fr') {
        greet = 'Bonjur'
    }


    return (
        <div className="box">
            <p>{greet} {props.children}</p>
        </div>
        
    )
}

export default Greetings;