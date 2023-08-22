import './IdCard.css'


const IdCard = (idCard) => {
    const { lastName, firstName, gender, height, birth, picture } = idCard
    return (
        <>
            <img src={picture} alt="idpicture" />
            <p>firstName: {firstName}</p>
            <p>lastName: {lastName}</p>
            <p>gender: {gender}</p>
            <p>height: {height}</p>
            <p>birth: {birth}</p>
        </>
    )
}

export default IdCard
