function IdCard(props) {

    // {lastName: String,
    //     firstName: String,
    //     gender: String, 
    //     height: Number,
    //     birth: Date,
    //     picture: String}


    return(
<div className="Id">
<div className="Pic">
    <img src={props.picture} alt="" />
</div> 
<div className="Info">
<p><strong>First name:</strong> {props.firstName}</p>
<p><strong>Last name:</strong>{props.lastName}</p>
<p><strong>Gender:</strong>{props.gender}</p>
<p><strong>Height:</strong>{props.height}</p>
<p><strong>Birth:</strong>{props.birth.toDateString()}</p>
</div>
</div>
    )
}

export default IdCard;