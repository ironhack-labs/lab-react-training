import "./Random.css";

function randomValue(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



const Random = (props)=>{
    return(
        <div className="Random-container">Random value between {props.min} and {props.max} {"=>"} {randomValue(props.min,props.max)}</div>
    )
}

export default Random