
const BoxColor = (props)=>{
    let colorBox ={
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        height:"15vh",
        border:"1px solid black",
        margin:"60px 0 40px 0"
        
    }

    return(
        <div style={colorBox}></div>
    )
}

export default BoxColor;