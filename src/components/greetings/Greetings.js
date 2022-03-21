import './Greetings.css';

const sayHello = (props) =>{
  if (props === 'en') {
    return `${'Hello'}`;
  } else if (props === 'fr') {
    return `${'Bonjour'}`;
  } else if (props === 'de') {
    return `${'Hallo'}`;
  } else {
    return `${'Hola'}`;
  };

}
const Greetings = ({ lang, children }) => {
     return(
         <p className>{sayHello(lang)} {children}</p>
     )
}
export default Greetings;
