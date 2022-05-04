function Greetings(props) {
  switch (props.lang) {
    case 'de':
    return (<div className="greeting"><p>Hallo {props.children}</p></div>);
  
    case 'es':
    return (<div className="greeting"><p>Hola {props.children}</p></div>);

    case 'fr':
    return (<div  className="greeting"><p>Bonjour {props.children}</p></div>);

    default:
    return (<div  className="greeting"><p>Hello {props.children}</p></div>);
  }
}

// Probably more efficient to have defined the return with tags once... to which we declare the prefix, set it and use it in the return (rather than defining the return four times above)


export default Greetings;