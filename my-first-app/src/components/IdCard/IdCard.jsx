import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <div className='IdCard'>
            <img src={picture} alt="" />
            <div className=''>
            <p>LastName: {lastName}</p>
        <p>FirstName: {firstName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height/100}m</p>
        <p>Birth: { birth.toDateString()}</p>
            </div>
        
        </div>
    )
}

export default IdCard