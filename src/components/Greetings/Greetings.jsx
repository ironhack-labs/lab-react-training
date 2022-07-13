import './Greetings.css'

const Greetings = ({lang, children}) => {

    
     switch (lang) {
         case "de":
             return <h3 className='language'>Hallo {children}</h3>
            // break;
         case "fr":
             return <h3 className='language'>Bonjour {children}</h3>
            //  break;
         case "en":
             return <h3 className='language'>Hello ${children}</h3>
            //  break;
         case "es":
             return <h3 className='language'>Hola ${children}</h3>
            //  break;
        default:
            break;
     }
    
}


export default Greetings