import React from 'react'

export default function Greetings({ lang, children }) {

    const printGreeting = () => {
        switch (lang) {
            case 'de':
            return 'Hallo';
            case 'en':
            return 'Hello';
            case 'es':
            return 'Hola';
            case 'fr':
            return 'Bonjour';
            default:
            return '';
        }
    }


  return (
    <div className="greetings">
        {printGreeting()} {children}
    </div>
  )
}