import React from 'react';

const GreetingsComponent = props => {
    const {lang} = props;
    let languages;
    switch (lang){
        case 'de':
            languages = 'Hallo';
        break;
        case 'fr':
            languages = 'Salut';
        break;
        case 'en':
            languages = 'Hi';
        break;
    }

    return (
        <div class="card">
            <h1>{languages} {props.children}</h1>
        </div>
    )
}

export default GreetingsComponent;
