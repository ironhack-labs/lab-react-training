
function RandomNumber(props){
return (
<div>
   <h3>Random number between {props.min} & {props.max} </h3>
   { Math.floor(Math.random() * (props.max - props.min) + props.min)}

</div>    
)
}

export default RandomNumber