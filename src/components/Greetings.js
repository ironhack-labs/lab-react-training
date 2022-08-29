import React from 'react';

function Greetings(props) {
    function renderGreetings(lang) {
        const cases = {
            de: 'Hallo!',
            en: 'Hello!',
            es: 'Hola!',
            fr: 'Bonjou!',
        }
        return cases[lang]
    }

    return (
        <div className="box-container">
        {` ${renderGreetings(props.lang)} ${props.children}`}
        </div>
    )
}

export default Greetings;