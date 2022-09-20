const Greetings = (props) => {

    const lang = {};

    switch (props.lang) {
        case "de":
            return "hallo"
            break;
        case "en":
            return "hello"
            break;
        case "fr":
            return "bonjour"
            break;
        case "es":
            return "hola"

    };

    
    return (
      <div>
        <h1>{props.lang}</h1>
        <p>{props.children}</p>
      </div>
    );
};

export default Greetings;