import React from 'react';

function Greetings(props) {
    
    const language = (lang) => {
        if(lang ==='de'){
            return 'Hallo'
        }else if(lang ==='es'){
            return 'Hola'
        }else if(lang ==='en'){
            return 'Hi'
        }else if(lang ==='fr'){
            return 'Bonjour'
        }else{
            return 'Language not recognized';
        }
    }

    return (
        <div className='box-black-border'>
            <b>{language(props.lang)} {props.children}</b>
        </div>
    );
}

export default Greetings;
