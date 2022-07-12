

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    const birthString = birth.toLocaleString() //Para convertir la fecha que tiene que ser en react en string

    return (<article className="idCard">

        <p>{lastName}</p>
        <p>{firstName}</p>
        <p>{gender}</p>
        <p>{height}</p>
        <p>{birthString}</p>
        <img src={picture} alt="alumni picture" />

    </article>)

}

export default IdCard