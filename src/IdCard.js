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
    <div>
      <div>
        <img src={props.picture} />
      </div>
      <ul>
        <li>First name: {props.firstName}</li>
        <li>Last name: {props.lastName}</li>
        <li>Gender: {props.gender}</li>
        <li>Height: {props.height}</li>
        <li>Birth: {props.birth.toDateString()}</li>
      </ul>
    </div>
  );
}

export default IdCard;
