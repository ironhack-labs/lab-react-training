
function Random(props) {

    
const random = Math.floor(Math.random() * (props.max - props.min) + props.min)
   
    return (
        <div className="App">
        
        <p>{`Random value between ${props.min} and ${props.max} => ${random}`}</p>
                      
        </div>
    );  
 }
 
 export default Random




