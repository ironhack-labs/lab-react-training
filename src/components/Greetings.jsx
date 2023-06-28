export default function Greetings(props) {
  const greetings = { de: 'Halo', es: 'Saludos', en: 'Hi', fr: 'Bonjour' };
  return (
    <div className="Border">
      <p>
        {greetings[props.lang]} {props.children}
      </p>
    </div>
  );
}
