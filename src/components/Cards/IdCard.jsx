import './IdCard.css'

function IdCard ({lastName, firstName, gender, height, birth, picture}) {
  return ( 
    <div className='Id-card'>
      <div className='id-card-images'>
        <img src= { picture } width="180px"></img>
      </div>
      <div className='id-card-content'>
        <p><b>Last Name:</b> { firstName }</p>
        <p><b>First Name:</b> { lastName }</p>
        <p><b>Gender:</b> { gender }</p>
        <p><b>Height:</b> { height }</p>
        <p><b>Birth:</b> { birth }</p>
      </div>
    </div>
    
   );
}

export default IdCard;









