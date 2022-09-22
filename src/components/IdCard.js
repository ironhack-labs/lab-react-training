function Idcard(props){
    const {firstName,lastName,gender,height,birth}=props
    return(
        <div className="card">
            <div className="cardImg"><img src={props.picture} alt="profilepic"/> </div>
            <div className="cardInfo">
                <span><strong>First name:</strong>{firstName}</span>
                <span><strong>Last name:</strong>{lastName}</span>
                <span><strong>Gender:</strong>{gender}</span>
                <span><strong>Height:</strong>{height}</span>
                <span><strong>Birth:</strong>{birth}</span>
            </div>
        </div>
    )
}


export default Idcard

