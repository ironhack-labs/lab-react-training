
function IdCard (props) {
    // console.log(props)
    return (
        <div className="box">
            
            <img src={props.picture} alt="profile"></img>
            
            <div>
                <p>
                    <b>First name</b>: {props.firstName}
                </p>
                <p>
                    <b>Last name</b>: {props.lastName}
                </p>
                <p>
                    <b>Gender</b>: {props.gender}
                </p>
                <p>
                    <b>Height</b> : {props.height}
                </p>
                <p>
                    <b>Birth</b> : {props.birth.toDateString()}
                </p>
            </div>
           
            
        </div>
    )
}

export default IdCard;