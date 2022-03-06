function Greetings(props) {
    let saudacao = "oi";

    if (props.lang === "de") {
        saudacao = "Hallo"
    } else if 
        (props.lang === "en") {
            saudacao = "Hey"
    } else if 
        (props.lang === "es") {
        saudacao = "Hola"
    } else if
        (props.lang === "fr") {
        saudacao = "Bonjour"
    };
   
    return (
        <p className="greetings">
          {saudacao} {props.children}
        </p>
      );
};



export default Greetings;


    
