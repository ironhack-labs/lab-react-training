function IdCard(props) {
  // console.log(props.birth);
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return (
    <div className="oneCard">
      <img src={props.picture} alt="picture" />
      <div className="infoCard">
        <p>
          First name: <p className="infoContent">{props.firstName}</p>
        </p>
        <p>
          Last name: <p className="infoContent">{props.lasttName}</p>
        </p>
        <p>
          Gender: <p className="infoContent">{props.gender}</p>
        </p>
        <p>
          Height: <p className="infoContent">{props.height}</p>
        </p>
        <p>
          Birth:{' '}
          <p className="infoContent">
            {dayNames[props.birth.getDay()]}{' '}
            {monthNames[props.birth.getMonth()]} {props.birth.getDate()}{' '}
            {props.birth.getFullYear()}
          </p>
        </p>
      </div>
    </div>
  );
}

export default IdCard;
