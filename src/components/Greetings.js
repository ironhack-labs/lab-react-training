

const Greetings = (props) =>{
    switch(props.lang){
        case 'de':
            return <div className="div-greetings">Halo  {props.children}</div>;

        case 'es':
            return <div className="div-greetings">Hola  {props.children}</div>;

        case 'fr':
            return <div className="div-greetings">Bonjour  {props.children}</div>;

        default:
            return <div className="div-greetings">Hello  {props.children}</div>;
    }
}

export default Greetings