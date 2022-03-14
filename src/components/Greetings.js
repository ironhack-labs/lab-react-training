//jshint esversion:8
export const Greetings = (props) => {

    let greeting;

    if(props.lang=== "de") {
        greeting = "Hallo ";
    }
    if(props.lang=== "en") {
        greeting = "Hello ";
    }
    if(props.lang=== "es") {
        greeting = "Hola ";
    }
    if(props.lang=== "fr") {
        greeting = "Bonjour ";
    }

    return (

        <div className="Greetings containers"> 
        
            {greeting}
            {props.children}
            
        </div>
    );
};