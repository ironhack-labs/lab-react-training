function Random(props){
    let random = Math.floor(Math.random() * (props.max - props.min) + props.min)
    console.log(props)
    return (
        <p className="box">Random value between {props.min} and {props.max} is {random} </p>
    )
   
}

export default Random;