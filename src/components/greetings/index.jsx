function Greetings (props){

    let firstName = props.data.firstName
    let text = ''

    if(props.data.lang === 'de'){
       text = `Hallo ${firstName}!`;
    }else if (props.data.lang === 'en'){
       text = `welcome ${firstName}!`;
    }else if (props.data.lang === 'es'){
       text = `Hola ${firstName}!`;
    } else if (props.data.lang === 'fr'){
       text = `Bonjour ${firstName}!`;
    } else {
        console.log('error');
    }

    return(
        <div>
            <p>{text}</p>
        </div>
    )
}
export default Greetings;