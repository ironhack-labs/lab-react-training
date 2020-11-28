import React, { Component } from 'react';

class Greetings extends Component {

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

        const greeting = this.getGreeting(lang);

        return (
            <div className='greetingCont'>
                <p>{greeting} {children}</p>
            </div>
        )

    }

}

export default Greetings;