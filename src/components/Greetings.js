const Greetings = ({ lang, children }) => {
  const mystyle = {
    display: 'flex',
    alignItems: 'center', 
    border: 'solid 1px', 
    marginBottom: '4px',
  }; 

  return (
    <div className="greetings" style={mystyle}>
      {lang === 'de' ? 'Hallo' : 'Bonjour'} {children}
    </div>
  );
};

export default Greetings;
