import { useEffect, useState } from 'react';
const Greetings = (props) => {
  const [greeting, setGreeting] = useState('');
  const greetingLanguage = () => {
    switch (props.lang) {
      case 'de':
        setGreeting('Hallo');
        break;
      case 'en':
        setGreeting('Hello');
        break;
      case 'es':
        setGreeting('Hola');
        break;
      case 'fr':
        setGreeting('Bonjour');
        break;
      default:
        break;
    }
  };
  useEffect(()=>{
   greetingLanguage()
  },[])
  return (
    <div className='m-2' style={{border:'2px solid black'}}> 
      <h4 className='p-1'>
        {greeting} {props.children}
      </h4>
    </div>
  );
};
export default Greetings;
