import './IdCard.css'

const IdCard = (IdCard) => {

    console.log(IdCard)

    const { lastName, firstName, gender, height, birth, picture } = IdCard



    return (
        <article className="IdCard">


            <img src={picture} alt={firstName} />



            <p>{lastName}</p>
            <p>{firstName}</p>
            <p>{gender}</p>
            <p>{height}</p>
            <p>{birth}</p>


        </article>
    )

}

export default IdCard