import React from 'react';

const Greet = (props) => {
    function language(langs){
    if(langs==='de')return `Hallo ${props.children}`
    else return `Bonjour ${props.children}`
    }
    return (
        <div className="box-card">
        <h2>{language(props.lang)}</h2>
        </div>
    )
}


export default function Greetings(props){
    return (
        <div>
        <Greet lang="de">Ludwig</Greet>
        <Greet lang="fr">François</Greet>
        </div>
    )
}

