import './index.css';

const Greetings = ({ lang, name, email }) => {
  let greeting = '';
  let textEmail = '';
  let validEmail = '';

  if (lang === 'de') {
    greeting = 'Hallo';
    textEmail = 'Ihre E-Mail-Adresse ist: ';
    validEmail = 'Ihre E-Mail ist gültig';
  } else if (lang === 'en') {
    greeting = 'Hello';
    textEmail = 'Your email address is: ';
    validEmail = 'your email is valid';
  } else if (lang === 'es') {
    greeting = 'привет';
    textEmail = 'Ваш адрес электронной почты: ';
    validEmail = 'ваша электронная почта действительна';
  } else if (lang === 'fr') {
    greeting = 'Bonjour';
    textEmail = 'Votre adresse e-mail est: ';
    validEmail = 'votre email est valide';
  }
  return (
    <div className="Greetings">
      <p>
        {greeting} {name}
      </p>
      <p>
        {textEmail && textEmail} {email}
      </p>
      <p>{validEmail && validEmail}</p>
    </div>
  );
};

export default Greetings;
