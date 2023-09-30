import React from 'react'

function Greetings(props) {
    const {lang, children} = props;
    let greetingText = ''

    switch (lang) {
        case 'de':
            greetingText = `Hallo, ${children}`;
            break
            case 'fr':
                greetingText = `Bonjour, ${children}`;
                break
    }
  return (
    <div>{greetingText}</div>
  )
}

export default Greetings