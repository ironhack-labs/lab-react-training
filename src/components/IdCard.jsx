function IdCard({firstName, lastName, gender, height, birth, picture}) {
        return (
            <div className="cardDiv">
                <div>
                    <img className="cardImage" src={picture} alt="user"/>
                </div>
                <div className="cardTextDiv">
                    <p>Name: {firstName}</p>
                    <p>Last name: {lastName}</p>
                    <p>Gender: {gender}</p>
                    <p>Height: {height}</p>
                    <p>Birth: {birth.toLocaleDateString()}</p>
                </div>   
            </div>
  )
}

export default IdCard
