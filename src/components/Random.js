function Random(props) {
    let myRandomNumber = Math.floor(Math.random() * (props.max - props.min)) + props.min;

    return (
        <div style={{
            'border': '1px solid black',
            'padding': '6px',
            'leftAlign': 'true'
        }}>
            <p>Random value between {props.min} and {props.max} =&gt; {myRandomNumber} </p>
        </div>
    )
} 

export default Random;