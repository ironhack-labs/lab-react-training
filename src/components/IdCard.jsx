
function IdCard(props){
    return(
        <div className="list">
            
                
                   
                    <div>
                    <p> First name: {props.firstName}</p>
                    <p>lastName:{props.lastName}</p>
                    <p>gender:{props.gender}</p>
                    <p>height:{props.height}m</p>
                    <p>birth:{props.birth.toDateString()}</p>
                    <img src={props.picture} alt='img-name' />
                    
                    </div>
                
                    
        
        </div>
    );

  
}
export default IdCard;