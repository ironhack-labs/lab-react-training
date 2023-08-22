function Random(props){
    let randomNumber = Math.floor(Math.random() * (props.max - props.min) + props.min);
    return(
        <div>
            <p className="text-box">Random value between {props.min} and {props.max} =&gt; {randomNumber}</p>
        </div>
    )
}

export default Random;