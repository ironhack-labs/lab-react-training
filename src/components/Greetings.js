
    const Greetings = ({language, children}) => {
        let greeting = "";
        switch (language) {
            case "de":
                greeting = "Hallo";
                break;
            case"en":
                greeting = "Hola";
                break;
            case "fr":
                greeting = "Bonjour";
                break;
            default:
                break;
        }
        return (
            <div>
            {greeting}
            {children}
            </div>
        )
    
    }

    export default Greetings
    