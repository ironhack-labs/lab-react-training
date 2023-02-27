const idCard = ({ cardInfo }) => {
    const { lastName, firstName, gender, height, birth, picture } = cardInfo
    const fullName = `${firstName}+" "+${lastName}`
    const birthday = new Date(birth).toLocaleDateString().toString()
    return (
        <article className="IdCard">
            <div>
                <img src={picture} alt={fullName} />
            </div>
            <div>
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>Gender: {gender}</p>
                <p>height: {height}</p>
                <p>birth: {birthday}</p>
            </div>
        </article>
    )
}

export default idCard