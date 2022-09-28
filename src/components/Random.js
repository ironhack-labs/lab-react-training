function Random(props){

    let num = Math.floor(Math.random()*props.max) + props.min;

    return(
        <h1 id="random">Random value between {props.min} and {props.max} =&gt; {num}</h1>
    )
}

export default Random;