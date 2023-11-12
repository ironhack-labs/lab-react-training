function Greetings(props) {
    const greetingStyle = {
        border: '1px solid black',
        margin: '1rem',
        padding: '1rem',
        textAlign: 'left',
    }

    return (
        <div style={greetingStyle}>
            {props.lang == 'de' && <span>Hallo </span>}
            {props.lang == 'fr' && <span>Bonjour </span>}
            <span> {props.children}</span>
        </div>
    );
}

export default Greetings;