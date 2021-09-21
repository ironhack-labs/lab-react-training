function Random(props){
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    return(
        <div className="bordered">

        <p>Random value between {props.min} and {props.max} = &gt; {random(props.min,props.max)}</p>
        </div>
    )
}

export default Random