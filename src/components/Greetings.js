
import { useEffect, useState } from 'react';
import './Greetings.css'

const Greetings = (props) => {
  let { children, lang } = props;

  const [greetings, setGreetings] = useState([]);

  useEffect(() => {

    switch (lang) {
      case 'de':
        setGreetings('Bom dia');
        break;
      case 'en':
        setGreetings('Good Morning');
        break;
      case 'es':
        setGreetings('Buen día');
        break;
      case 'fr':
        setGreetings('Bonjour');
        break;
    }

  }, [])

  return (
    <p id='item-name'>{greetings + ' ' + children}</p>
  )

}
export default Greetings