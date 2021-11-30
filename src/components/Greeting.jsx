
const Greeting = (props) => {
    const {person} = props;

    const greeting = (person) => {
        console.log(person)
        switch (person.lang) {
            case 'en': 
                return "Hello"
            case 'fr': 
                return "Bonjour"
            case 'es': 
                return "Hola"
            default:
                return "Hello"
            }
    } 

    return (
        <div className="greeting"> 
            {greeting(person)} {person.firstName} !
        </div>
    )
}

export default Greeting
