import React from 'react';

export default function Greetings(props) {
    return (
        <p>{props.message} {props.name}</p>
    )
}

// How/where do I implement this logic?
// if (props.lang === de) (props.message === "Hallo");
// if (props.lang === fr) (props.message === "Bonjour");
// if (props.lang === es) (props.message === "Hola");
// if (props.lang === en) (props.message === "Hello");