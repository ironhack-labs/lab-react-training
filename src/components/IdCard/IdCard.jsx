import './../IdCard/IdCard.css'


const IdCard = ({ CardInfo }) => {

    const { lastName, firstName, gender, height, birth, picture } = CardInfo

    return (
        <div className="IdCard">

            <div className='imgCard'>
                <img src={picture} alt={firstName} />
            </div>
            <div className='IdData'>
                <p>Last Name: {lastName}</ p>
                <p>First Name: {firstName}</p>
                <p>Gender:{gender}</p>
                <p>Height: {height}</p>
                <p>Birth: {birth}</p>
            </div>


        </div>
    )

}


export default IdCard