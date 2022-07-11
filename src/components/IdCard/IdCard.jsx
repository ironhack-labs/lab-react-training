import "./IdCard.css"

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <article className="id-card">

            <div>
                <img src={picture} alt="photo" />
            </div>

            <div>
                <h6><strong>Fitst Name: </strong>{firstName}</h6>
                <h6><strong>Last Name: </strong>{lastName}</h6>
                <h6><strong>Gender: </strong>{gender}</h6>
                <h6><strong>Height: </strong>{height}</h6>
                <h6><strong>Birth: </strong>{birth.toDateString()}</h6>
            </div>

        </article>
    )

}



export default IdCard

