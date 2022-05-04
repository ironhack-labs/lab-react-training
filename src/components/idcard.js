function IdCard(props) {
    return (
        <div style={{
            'border': '1px solid black',
            'display': 'flex',

        }}>
            <div className="idCardPhoto">
                    <img src={props.picture} alt="id card"></img>
            </div>            
            <div className="idCardInfo">
                <p>
                    <b>First Name:</b> {props.firstName}
                </p>
                <p>
                    <b>Last Name:</b> {props.lastName}            
                </p>
                <p>
                    <b>Gender:</b> {props.gender}            
                </p>
                <p>
                    <b>Height:</b> {props.height}
                </p>
                <p>
                    <b>Birth:</b> {props.birth.toDateString()}
                </p>
            </div>
        </div>
    )
}

export default IdCard;