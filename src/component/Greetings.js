import React from 'react'

function Greetings(prop) {
        let sayHello = '';
        switch (prop.lang) {
                case "de":
                        sayHello = "Hallo"
                        break;
                case "en":
                        sayHello = "Hello"
                        break;
                case "es":
                        sayHello = "Halo"
                        break;
                case "fr":
                        sayHello = "Bonjour"
                        break;
                default:
                        sayHello = "Bonjour"
                        break;
        }
        return (
                <div className="border">
                        <h3 lang={prop.lang}>{sayHello} {prop.children}</h3>
                </div>
        )
}

export default Greetings
