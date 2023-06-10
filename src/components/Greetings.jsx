export default function Greetings(props) {
  let helloTranslated = '';
  switch (props.lang) {
    case 'de':
      helloTranslated = 'Hallo';
      break;
    case 'fr':
      helloTranslated = 'Bonjour';
      break;
    case 'es':
      helloTranslated = 'Ola';
      break;
    default:
      helloTranslated = 'Hello';
      break;
  }
  return (
    <div className="greetings box">{`${helloTranslated} ${props.children}`}</div>
  );
}
