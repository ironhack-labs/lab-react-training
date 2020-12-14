//Paso I:Importaciones
import { render } from '@testing-library/react'
import React, {Component} from 'react'
import '../css/App.css'



//Paso II: Clases o Funciones 

class Greeting extends Component {

    getGreeting(lang) {
        switch (lang) {
            case 'de':
                return 'Hallo';
            case 'en':
                return 'Hello';
            case 'es':
                return 'Hola';
            case 'fr':
                return 'Bonjour';
        }
    }


render({lang, children}=this.props) {
    
    const greeting =this.getGreeting(lang);
    return (
    
    <div className='greetingContainer'>
            <p> {greeting} {children}</p>
        </div>
    
        
    )}
    };


//Paso III:Exportaciones
export default Greeting;