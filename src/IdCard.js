function IdCard(props) {
  //     let student = '';
  // if(props.data.student){
  //     student = 'true';
  // } else {
  //     student = 'false';
  // }

  // return (
  // <div>
  // <div>
  // <img src={props.data.img} alt='student'></img>
  // </div>
  // <div>{props.data.firstName}</div>
  // <div>{props.data.lastName}</div>
  // <div>{props.data.country}</div>
  // <div>{student}</div>
  // </div>
  // )

  return (
      <div className='IdCard box'>
          <img src={props.picture} alt={''}/>
        <div>
          <strong>First name</strong>: {props.firstName}<br/>
          <strong>Last name</strong>: {props.lastName}<br/>
          <strong>Gender</strong>: {props.gender}<br/>
          <strong>Height</strong>: {props.height}<br/>
          <strong>First name</strong>: {props.birth.toDateString()}<br/>
        </div>
        {/* <ul style={{listStyleType: 'none'}}>
          <li>First name: {props.firstName}</li>
          <li>Last name: {props.lastName}</li>
          <li>Gender: {props.gender}</li>
          <li>Height: {props.height}</li>
          <li>Birth: {props.birth.toDateString()}</li>
        </ul> */}
      </div>
  );
}

export default IdCard;
