import React from 'react';
import './Greetings.css';

const Greetings = (props)=>{
    switch (props.lang){
        case 'de':
            return <div>{`Hallo ${props.children}`}</div>
        case 'fr':
            return <div>{`Bonjour ${props.children}`}</div>
    }
}

export default Greetings