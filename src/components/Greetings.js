function Greetings(props) {
  return (
    <div className="greetings">
      {props.lang === 'de' && <> Hallo </>}
      {props.lang === 'en' && <> Hello </>}
      {props.lang === 'es' && <> Hola </>}
      {props.lang === 'fr' && <> Bonjour </>}
      {props.children}
    </div>
  );
}

export default Greetings;
