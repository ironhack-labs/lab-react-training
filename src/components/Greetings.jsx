const Greetings = (props) => {
  let helloText = '';
  // let helloText = '';
  // if (props.lang === 'de') {
  //   helloText = 'Hallo';
  // } else if (props.lang === 'es') {
  //   helloText = 'Hola';
  // } else if (props.lang === 'en') {
  //   helloText = 'Hello';
  // } else {
  //   helloText = 'Bonjour';
  // }

  switch (props.lang) {
    case 'de':
      helloText = 'Hallo';
      break;
    case 'en':
      helloText = 'Hello';
      break;
    case 'es':
      helloText = 'Hola';
      break;
    case 'fr':
      helloText = 'Bonjour';
      break;
    default:
      helloText = 'Language not supported';
      break;
  }

  return (
    <div
      style={{
        border: '1px solid black',
        padding: '6px',
        textAlign: 'left',
        fontSize: '2rem',
      }}
    >
      <p>
        {/* {helloText} {props.children} */}
        {helloText + ' ' + props.children}
      </p>
    </div>
  );
};

export default Greetings;
