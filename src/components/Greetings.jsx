import './Greetings.css';
import { useState } from 'react';
const greetingLanguage = {
  de: 'Hallo', 
  en: 'Hey',
  es: 'Hola',
  fr:'Bonjour'
}
const Greetings = (props) => {
  const [greetingState, setGreetingState] = useState('');


  const selectedHandler = (e) => {
   setGreetingState(greetingLanguage[e.target.value])
  };


  return (
    <div className="greeting">
      <h1>
        {greetingState}
          {props.children}
      </h1>
      <form>
        <label htmlFor="language">
          <select name="language" id="language" onChange={selectedHandler}>
            <option value="language">Language</option>
            <option value="de">DE</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default Greetings;