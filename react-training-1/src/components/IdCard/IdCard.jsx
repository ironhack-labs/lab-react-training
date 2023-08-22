const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}m</p>
            <p>Birth: {birth.toDateString()}</p>
            <img src={picture} alt="picture" />
        </>
    )
}

export default IdCard
