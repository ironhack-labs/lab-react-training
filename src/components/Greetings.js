function Greetings(props) {

    let helloText = '';

    switch(props.lang) {
        case 'de':
            helloText = 'Hallo';
            break;
        case 'es':
            helloText = 'Hola';
            break;
        case 'en':
            helloText = 'Hello';
            break;
        case 'fr':
            helloText = 'Bonjour';
            break;
            default: 
            helloText = 'Language not supported';

    }

    return (
        <div style={{
            'border': '1px solid black',
            'padding': '6px',
            'leftAlign': 'true'
        }}>
            <p>{ helloText + ' ' + props.children }</p>
        </div>
    )
}

export default Greetings;