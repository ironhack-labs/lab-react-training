function IdCard({eachCard}) {
        return (
            <div className="cardDiv">
                <div>
                    <img className="cardImage" src={eachCard.picture} alt="user"/>
                </div>
                <div className="cardTextDiv">
                    <p>Name: {eachCard.firstName}</p>
                    <p>Last name: {eachCard.lastName}</p>
                    <p>Gender: {eachCard.gender}</p>
                    <p>Height: {eachCard.height}</p>
                    <p>Birth: {eachCard.birth}</p>
                </div>   
            </div>
  )
}

export default IdCard
