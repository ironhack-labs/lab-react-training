


function BoxColor(props){
    console.log(props)
    const divStyle = {
        "background-color": `rgba(${props.r},${props.g},${props.b})`
      };

    return (
        <div >
            <div style = {divStyle}>
                <span> {props.r} {props.g} {props.b} </span>
            </div>
        </div>
    )
}


export default BoxColor;