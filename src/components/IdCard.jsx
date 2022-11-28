import './IdCard.css'

const IdCard = props => {

    const { lastName, firstName, gender, height, birth, picture } = props
    

    return (
        <div className='idCard'>
            <img src={picture} alt="IdCards"></img> 
            <h3> first Name {firstName}</h3>
            <p>last Name {lastName} </p>
            <p> Gender {gender}</p>
            <p> Height {height}</p>
            <p> Birth {birth.toString()}</p>
          
           
        </div>
    )
}

export default IdCard