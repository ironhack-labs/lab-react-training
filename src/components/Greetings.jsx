

function Greetings(props) {


    const greet = {
        de:"Hallo",
        en: "Hello",
        es: "Hola",
        fr: 'Bonjour'
    }
   
    return (
        <div className="App">

            <p> {greet[props.lang]} 
                {props.children}</p>
                      
        </div>
    );  
 }
 
 export default Greetings