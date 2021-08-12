import '../Styles/Greetings.css';

const langs = {
  de: 'Hallo',
  fr: 'Bonjour',
  es: 'Ola',
  en: 'Hello',
};

// need to check here

function Greetings(props) {
  return (
    <div className="Greetings">
      {langs[props.lang]}
      {props.children}
    </div>
  );
}

export default Greetings;
