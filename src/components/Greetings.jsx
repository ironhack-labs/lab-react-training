const Greetings = (props) => {
  let helloText = '';
  if (props.lang === 'de') {
    helloText = 'Hallo';
  } else if (props.lang === 'es') {
    helloText = 'Hola';
  } else if (props.lang === 'en') {
    helloText = 'Hello';
  } else {
    helloText = 'Bonjour';
  }

  return (
    <div>
      <p>
        {helloText} {props.children}
      </p>
    </div>
  );
};

export default Greetings;
