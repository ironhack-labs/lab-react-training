import './IdCard.css'
const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    const date = new Date(birth).toDateString()

    return (
        <>
            <p>{lastName}</p>
            <p>{firstName}</p>
            <p>{gender}</p>
            <p>{height}</p>
            {/* <p>{birth}</p> */}
            <img src={picture} alt="" />
        </>
    )
}
export default IdCard