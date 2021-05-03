import './IdCard.css'

export default function (props) {
    let result = Math.floor(Math.random() * (props.max - props.min) + props.min);
    return (
        <div className='container'>
            <p>Random value between {props.min} and {props.max} =&gt; {result}</p>
        </div>
    )
}