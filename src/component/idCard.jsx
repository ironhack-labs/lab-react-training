const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <article className="IdCard">
            <h2>First name: {firstName}</h2>
            <h3>Last name:{lastName}</h3>
            <h3>Gender: {gender}</h3>
            <h3> Height: {height}</h3>
            <h3> Birth: {birth}</h3>
            <img src={picture} alt='picture' />
        </article>
    )
}
export default IdCard



