function IdCard(props){
    return(
     <div className="card">
         <div className="cardImg"><img src={props.picture} alt=""/></div>
         <div className="cardInfo">
             <span><strong>FirstName: </strong>{props.firstName}</span>
             <span><strong>LastName: </strong>{props.lastName}</span>
             <span><strong>Gender: </strong>{props.gender}</span>
             <span><strong>Height: </strong>{props.height}</span>
             <span><strong>Birth: </strong>{props.birth}</span>
         </div>
     </div>
    );
 }
 export default IdCard;