function BoxColor(props){

const red = props.r
const green = props.g
const blue = props.b


return(
    <div className="boxcolor">
    <div style={{ 
        width: 600, 
        height: 100, 
        backgroundColor: `rgb(${red},${green},${blue})`, 
        border:"solid",
        textAlign:"center",
        padding:20,
        margin:20,
        fontSize:30,
        
      
    }}>
        
        <p>rgb ({red},{green},{blue})</p>
        
    </div>
    </div>
)
    


}

export default BoxColor