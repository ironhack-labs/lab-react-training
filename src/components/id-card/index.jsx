function Idcard (props){
    return(
        <div className="id-card">
            <img src={props.data.picture} alt=""/>
            <div className="card-info">
                <div className="card-line">
                    <h3>First Name:</h3>
                    <p>{props.data.firstName}</p>
                </div>
                <div className="card-line">
                    <h3>Last Name:</h3>
                    <p>{props.data.lastName}</p>
                </div>
                <div className="card-line">
                    <h3>Gender:</h3>
                    <p>{props.data.gender}</p>
                </div>
                <div className="card-line">
                    <h3>Height:</h3>~
                    <p>{props.data.height}</p>
                </div> 
                <div className="card-line">
                    <h3>Birth:</h3>
                    <p>{props.data.birth.toDateString()}</p>
                </div>
            </div>
        </div>
    )
}
export default Idcard;