import './IdCard.css'

function IdCard(props) {

const {lastName, firstName, gender, height, birth, picture} = props;
const formattedBirth = birth.toDateString();

  return (
    <div className='IdCard d-flex'>
        <img src={picture}></img>
        <div>
            <p className='idcard-p' >FirstName: <span className='idcard-span'>{firstName}</span></p>
            <p className='idcard-p' >LastName: <span className='idcard-span'>{lastName}</span></p>
            <p className='idcard-p' >Gender: <span className='idcard-span'>{gender}</span></p>
            <p className='idcard-p' >Height: <span className='idcard-span'>{height}</span></p>
            <p className='idcard-p' >Birth: <span className='idcard-span'>{formattedBirth}</span></p>
        
        </div>
    </div>
  )
}

export default IdCard;