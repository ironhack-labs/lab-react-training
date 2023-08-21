import './IdCard.css'
const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {


    return (<div className="card">
        <img src={picture} />
        <div>
            <p><strong>First name: </strong>{firstName}</p>
            <p><strong>Last name: </strong>{lastName}</p>
            <p><strong>Gender: </strong>{gender}</p>
            <p><strong>Height: </strong>{`${height.toString()} m`}</p>
            <p><strong>Birth: </strong>{birth.toLocaleDateString("en-US")}</p>
        </div>

    </div>)

}

export default IdCard