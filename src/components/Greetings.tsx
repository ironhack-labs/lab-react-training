import './App.css';
interface prop {
  lang: string;
  children: string;
}

function Greet({ lang, children }: prop) {
  let text = '';
  switch (lang) {
    case 'de':
      text = '  Hallo ' + children;
      break;
    case 'en':
      text = '  Hello ' + children;
      break;
    case 'es':
      text = '  iHola ' + children;
      break;
    case 'fr':
      text = '  Bonjour ' + children;
      break;

    default:
      break;
  }

  return (
    <>
      <div className="greet">
        <h2 id="text">{text}</h2>
      </div>
    </>
  );
}

export default Greet;
