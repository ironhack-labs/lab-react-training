

function Random (props){
    
const ranNum = Math.floor(Math.random() * (props.max - props.min) + props.min)
return (
    <p>Random value between {props.min} and {props.max} = {ranNum}  </p>
)
}

export default Random