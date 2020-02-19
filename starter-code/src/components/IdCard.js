import React from 'react'


const IdCard = (props) =>{
    

    
        return(
<article className='id-card'>




            <div> 
                <p> 
                    <img src={props.picture} alt=''/>  
                </p> 
            </div>
            
            <div>      
                               
                <p>  <span>First Name: {props.firstName}</span> </p>   
                                
                <p>   <span>Last Name: {props.lastName }</span> </p>   
                                
                <p> <span>Gender: {props.gender}</span>  </p>  
                
                <p>  <span>Heigth: {props.height / 100}</span></p>
                
                <p>  <span>Birth: {props.birth.toDateString()} </span></p>  

           </div>

</article>
        
        )
    


}

export default IdCard