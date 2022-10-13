function IdCard(props){
	return(
		 <div className="card">
				 <div className="card-img">
						 <img src={props.picture} alt="imageprofile"></img>
				 </div>
				 <div className="card-info">
						 <span><b>Last Name: </b>{props.lastName}</span>
						 <span><b>First Name: </b>{props.firstName}</span>
						 <span><b>Height: </b>{props.height}</span>
						 <span><b>Date of Birth </b>{props.birth}</span>
				 </div>
		 </div>
	)
 }
 export default IdCard;