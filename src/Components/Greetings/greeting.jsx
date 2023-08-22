function Greetings(props){
    const {lang, children} = props;

    function renderSwitch(lang, children){
        switch(lang){
            case "de":
                return "Hallo " + children;

            case "en":
                return "Hello " + children;

            case "es":
                return "Hola " + children;

            case "fr":
                return "Bonjour " + children;

            default:
                return "Olá " + children;
        }
    }

    return(
        <div>
            <p>{renderSwitch(lang, children)}</p>
        </div>
    )
}

export default Greetings;