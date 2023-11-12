function Random(props) {
    const randomStyle = {
        border: '1px solid black',
        margin: '1rem',
        padding: '1rem',
        textAlign: 'left',
    }

    let randomNumber = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
    return (
        <div style={randomStyle}>Random valur between {props.min} and {props.max} =&gt; {randomNumber}</div>
    );
}

export default Random;