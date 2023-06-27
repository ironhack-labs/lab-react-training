function IdCard (props) {
    // console.log( props.birth.toLocaleString()); --> para convertir el objeto Date en string y lo renderize
    return (
        
        <div className="IdCard">
             <div className="ProfileImage">
                <img src={props.picture} alt="Profile Image"/>
            </div>
            <div className="UserInfo">
                <p><b>First Name:</b> {props.firstName}</p>
                <p><b>Last Name:</b> {props.lastName}</p>
                <p><b>Gender:</b> {props.gender}</p>
                <p><b>Height:</b> {props.height}</p>
                <p><b>Birth:</b> {props.birth.toLocaleString()}</p> 
            </div> 

        </div>

    )
}

export default IdCard