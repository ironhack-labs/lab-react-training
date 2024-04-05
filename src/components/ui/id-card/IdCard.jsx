import './IdCard.css';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className='idCard d-flex mb-2 p-2'>
      <img className='object-fit-contain' src={`${picture}`} alt="" />
      <div className='px-2'>
        <p className='mb-0'><strong>First name: </strong>{firstName}</p>
        <p className='mb-0'><strong>Last name: </strong>{lastName}</p>
        <p className='mb-0'><strong>Gender: </strong>{gender}</p>
        <p className='mb-0'><strong>Height: </strong>{height}</p>
        <p className='mb-0'><strong>Birth: </strong>{`${birth}`}</p>
      </div>
    </div>
  )
}

export default IdCard;