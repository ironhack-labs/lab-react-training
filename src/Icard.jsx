const Icard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return <div>
        <p> <strong>Last Name: </strong>{lastName} </p>
        <p> <strong>First Name: </strong>{firstName}</p>
        <p> <strong>Gender: </strong>{gender}</p>
        <p> <strong>Height: </strong>{height}</p>
        <p> <strong>Birth: </strong>{birth.toString()} </p>
        <img src={picture} alt={picture} />
    </div>

}
export default Icard