const Greetings = (props) => {
    let greet = ''
    switch(Greetings){
        case ("de"):
            greet ='Halo';
            break;
        case ("fr"):
            greet ='Bonjour';
            break;
        case ("es"):
            greet ='Hola';
            break;
            default:
            greet ='Hello';

    return (
      <div className="container">
        <p> {greet} {props.children} </p>
      </div>
    ) 
  

}
}
  
export default Greetings;