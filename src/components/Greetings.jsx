const Greetings = ({ lang, children }) => {
  return (
    <>
      {lang === 'de' && <> Hallo </>}
      {lang === 'es' && <> Hola </>}
      {lang === 'fr' && <> Bounjour </>}
      {lang === 'en' && <> Hello </>}
      {children}
      <br />
    </>
  );
};

export default Greetings;
