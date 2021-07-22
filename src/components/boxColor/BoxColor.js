
function BoxColor(props) {

    return(
        <div className="container ms-5 mt-2" style={{backgroundColor:`rgb(${props.r},${props.g},${props.b})`, color:'white'}}>
            <p>RGB: {props.r} {props.g} {props.b}</p>
        </div>
    )
}

export default BoxColor