function BoxColor (props){
    return(
    <div className="BoxColor">
    <div 
    style={{backgroundColor:`rgb(${props.r}, ${props.g}, ${props.b})`,
    width:"880px",
    height:"100px"}}>
    <p className="TextBox">{`rgb(${props.r}, ${props.g}, ${props.b})`}</p>
    </div>
    </div>
    )
}

export default BoxColor; 