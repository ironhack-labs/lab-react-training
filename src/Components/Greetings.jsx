import '../Styles/Greetings.css';

const langs = {
  de: 'Hallo',
  fr: 'Bonjour',
};

function Greetings(props) {
  return (
    <div className="Greetings">
      {langs[props.lang]}
      {props.children}
    </div>
  );
}

export default Greetings;
