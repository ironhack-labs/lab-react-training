import './Greeting.css';

const Greetings = (props) => {
  const { lang } = props;

  return (
    <div className="Greeting">
      {lang === 'de' ? (
        <p>Hallo {props.children}</p>
      ) : (
        <p>Bonjour {props.children}</p>
      )}
    </div>
  );
};

export default Greetings;
