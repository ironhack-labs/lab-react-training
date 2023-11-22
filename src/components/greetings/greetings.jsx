
function Greetings( { lang, children } ){
  let greetingText = " ";

  switch(lang) {
    case 'de':
      greetingText = `Hallo ${children}`;
      break;
    case 'fr':
      greetingText = `Bonjour ${children}`;
      break;
    case 'es':
      greetingText = `Hola ${children}!`;
      break;
    case 'en':
    default:  
      greetingText = `Hello ${children}`;      
      break;
  }

  return (
   
      <div className=" border mx-5 px-2 my-3" style={{width:"700px", height:"50px", fontSize:"2rem"}}>{greetingText}</div>
   
  )
}

export default Greetings;