import React from 'react'

export default function Greetings(props) {
    // console.log(props);
    let langString = ''
    if(props.lang ==='de') {
        langString = 'Hallo'
    }
    if(props.lang ==='en') {
        langString = 'Hello'
    }
    if(props.lang ==='es') {
        langString = 'Hola'
    }
    if(props.lang ==='fr') {
        langString = 'Bonjour'
    }
    return (
        <div>
            {langString} {props.children}
        </div>
    )
}
