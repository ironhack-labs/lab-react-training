export const Greetings = (props) => {
  const { lang, children } = props;

  const greetingLang = {
    fr: 'Bonjour',
    de: 'Hallo',
    es: 'Hola',
    pt: 'Olá',
  };

  return (
    <div>
      {greetingLang[lang]} {children}
    </div>
  );
};
