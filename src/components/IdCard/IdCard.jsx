import './IdCard.css'
const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    const birthDate = new Date(birth).toDateString()

    return (
        <>
            <p><strong>First Name: </strong>{firstName}</p>
            <p><strong>Last Name: </strong>{lastName}</p>
            <p><strong>Gender: </strong>{gender}</p>
            <p><strong>Height: </strong>{height}</p>
            <p><strong>Birth: </strong>{birthDate}</p>
            <p><img src={picture} alt="picture" /></p>
        </>
    )
}
export default IdCard
