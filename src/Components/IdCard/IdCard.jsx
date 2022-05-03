import './IdCard.css'

const idCard = ({ lastName, firstName, gender, height, birth, picture }) => {


    return (
        <div className='card'>
            <img src={picture} alt="h" />

            <p>FirstName {firstName} </p>
            <p>LastName {lastName} </p>
            <p>Gender {gender} </p>
            <p>Height {height} </p>
            <p>Birth {birth.toString()}</p>


        </div>
    )
}

export default idCard
