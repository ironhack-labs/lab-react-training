function Greetings(props) {
  console.log(props);
  return (
    <div style={{ border: '1px solid black', textAlign: 'left', padding: '10px' }}>
      <p>{props.lang === 'de' && `Hallo ${props.children}`}</p>
      <p>{props.lang === 'fr' && `Bonjour ${props.children}`}</p>
    </div>
  );
}

export default Greetings;
