function Random(props){
let max = props.max;
let min = props.min;
    let randomNum = Math.floor(Math.random() * props.max) + props.min
    return (
<div>
<p> Random value betweeen {min} and {max} : {randomNum}</p>
</div>
    )
}

export default Random;