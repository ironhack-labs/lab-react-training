
function Greetings(props) {

    return (
        <div class="card container" style={{ width: 800 }}>

            <div >{props.lang == "de" && <p> Hallo  {props.children} </p>}</div>
            <div >{props.lang == "en" && <p> Hello  {props.children}</p>}</div>
            <div >{props.lang == "es" && <p> Hola  {props.children}</p>}</div>
            <div >{props.lang == "fr" && <p> Bonjour  {props.children}</p>}</div>

        </div>
    )

}

export default Greetings