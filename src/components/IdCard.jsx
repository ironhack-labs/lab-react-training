const IdCard = (props) => {

    const date = props.birth.toDateString()



    return (
        <div id="card">
            <img src={props.picture} alt="profile"/>
            <div>
                <p><span className="card-span"><strong>First name:</strong></span> {props.firstName}</p>
                <p><span className="card-span"><strong>Last name:</strong></span> {props.lastName}</p>
                <p><span className="card-span"><strong>Gender:</strong></span> {props.gender}</p>
                <p><span className="card-span"><strong>Height:</strong></span> {parseFloat(props.height/100).toFixed(2)}m</p>
                <p><span className="card-span"><strong>Birth:</strong></span> {date}</p>
            </div>
        </div>
    )
}

export default IdCard;