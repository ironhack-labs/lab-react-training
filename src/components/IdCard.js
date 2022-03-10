const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className = "id-card">
        <div className = "id-card-pic">
            <img src={picture} alt="User pic"/>
        </div>
        <div>
            <p>
                <strong>First name: </strong>{firstName}
            </p>
            <p>
                <strong>Last name: </strong>{lastName}
            </p>
            <p>
                <strong>Gender: </strong>{gender}
            </p>
            <p>
                <strong>Height: </strong>{height / 100}m
            </p>
            <p>
                <strong>Birth: </strong>{birth.toDateString()}
            </p>
        </div>
    </div>
  )
}

export default IdCard