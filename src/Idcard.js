function Idcard(props){

    

    const {lastName,firstName,gender,height,birth,picture} = props.dataObj
    let convertedBirth = []
    birth.toString().split(' ').forEach((element,index) => {
        return index <= 3 && convertedBirth.push(element)  //short circuit 
    });


    return (
        <div className="card-box">
            <img src={picture} className="card-img-left" alt={firstName} />
            <div className="card-text">
                <ul>
                    <li><span><strong>First Name:</strong></span> <span>{firstName}</span></li>
                    <li><span><strong>Last Name:</strong></span> <span>{lastName}</span></li>
                    <li><span><strong>Gender:</strong></span> <span>{gender}</span></li>
                    <li><span><strong>Height:</strong></span> <span>{height}m</span></li>
                    <li><span><strong>Birth:</strong></span> <span>{convertedBirth.join(' ')}</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Idcard;