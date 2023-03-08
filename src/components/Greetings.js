
function Greetings ({lang, children}) {
   
    let greeting;
    

    if (lang === 'de') {
        greeting = 'Hallo';
      } else if (lang === 'en') {
        greeting = 'Hello';
      } else if (lang === 'es') {
        greeting = 'Hola';
      } else if (lang === 'fr') {
        greeting = 'Bonjour';
      } else {
        greeting = 'Hello';
      }

return (
    <div className="greeting">
      {greeting} {children}!
    </div>
)
}

export default Greetings;