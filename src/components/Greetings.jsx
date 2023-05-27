export default function Greetings(props) {
  return (
    <div>
      {props.lang === 'de' && <p>Halo {props.children}</p>}
      {props.lang === 'es' && <p>Saludos {props.children}</p>}
      {props.lang === 'en' && <p>Hi {props.children}</p>}
      {props.lang === 'fr' && <p>Bonjour {props.children}</p>}
    </div>
  );
}
