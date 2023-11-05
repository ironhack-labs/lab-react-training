import '../styles/Random.css';

export default function Random(props) {
    const randomValue = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;

    return (
        <div className='Random'>
            <p>
            Random value between {props.min} and {props.max} =&gt; {randomValue}
            </p>
        </div>
    );
}