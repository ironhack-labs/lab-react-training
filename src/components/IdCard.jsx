const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <div>
            <img src={picture} alt="" />
            <p>{lastName}</p>
            <p>{firstName}</p>
            <p>{gender}</p>
            <p>{height}</p>
            <p>{birth}</p>
        </div>
    )
}
export default IdCard