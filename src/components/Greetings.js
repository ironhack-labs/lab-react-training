function Greetings(props){

    let  greeting = ''

   switch( props.lang) {
    
    case "de":
      greeting =  "hallo";
      break;
    
    case "fr":
        greeting = "bonjour";
        break; 
    default: 
        greeting = "hola";       
   }
 

return (

<div className="greeting"> 

<p> {greeting} {props.children} </p>

</div>


)


}

export default Greetings 