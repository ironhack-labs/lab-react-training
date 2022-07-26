function IdCard({lastName,firstName,gender,height,birth,picture}){
    return(
        <div className="Card">
        <div>
        <img src={picture}></img>
        </div>
        <div className="textCard">
        <p>First name:{lastName} </p>
        <p>Last name :{firstName}</p>
        <p>Gender: {gender}</p>
        <p>Heigth: {height} m</p>
        <p>Birth: {birth}</p>
        </div>
        </div>

    )
}

export default IdCard