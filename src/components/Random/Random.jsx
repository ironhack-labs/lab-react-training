import './Random.css';

const Random = (props) => {
    return (
        <>
            <h3 class="border">Random value between: <> {Math.floor(Math.random() * (props.max - props.min + 1)) + props.min} </></h3>
        </>
    )
}

export default Random;