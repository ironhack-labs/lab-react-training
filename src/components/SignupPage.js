import Greetings from './Greetings';
import { useState } from 'react';

function SignupPage(props) {
  const { lang } = props;
  const [email, setEmail] = useState('');
  function salute() {
    if (lang === 'de') {
      return <div className="salute">Hallo </div>;
    } else if (lang === 'en') {
      return <div className="salute">Hello </div>;
    } else if (lang === 'es') {
      return <div className="salute">Hola </div>;
    } else if (lang === 'fr') {
      return <div className="salute">Bonjour </div>;
    } else {
      return <div>Sorry</div>;
    }
  }
  return (
    <div className="signup">
      <Greetings lang={props.lang} />
      <input type="email"></input>
      <input type="password"></input>

      <select type="string" name="lang">
        <option value={''}>-- Please choose an option --</option>
        <option value={'en'}>-- En --</option>
        <option value={'de'}>-- De --</option>
        <option value={'fr'}>-- Fr --</option>
      </select>
    </div>
  );
}

export default SignupPage;
