function IdCard(props) {
  return (
    <div className='IdCard box'>
      <img alt="picture" className='picture' src={`${props.picture}`}/>
      <ul>
        <li><b>First name: </b>{props.firstName}</li>
        <li><b>Last name: </b>{props.lastName}</li>
        <li><b>Gender: </b>{props.gender}</li>
        <li><b>Height: </b>{props.height}m</li>
        <li><b>Birth: </b>{props.birth.toDateString()}</li>
      </ul>
    </div>
  );
}

export default IdCard;