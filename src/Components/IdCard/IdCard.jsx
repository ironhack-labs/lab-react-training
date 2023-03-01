import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    const date = birth.toString()


    return (

        <div className='IdCard' >
            <p>{lastName}</p>
            <p>{firstName}</p>
            <p>{gender}</p>
            <p>{height}</p>
            <p>{date}</p>
            <img src={picture} alt="" />
        </div>

    )
}

export default IdCard