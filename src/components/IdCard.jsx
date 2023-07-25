import React from 'react';

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
    'Dec'
  ];

  return (
    <div className="oneCard">
      <img src={props.picture} alt="picture" />
      <div className="infoCard">
        <p>
          First name: <span className="infoContent">{props.firstName}</span>
        </p>
        <p>
          Last name: <span className="infoContent">{props.lasttName}</span>
        </p>
        <p>
          Gender: <span className="infoContent">{props.gender}</span>
        </p>
        <p>
          Height: <span className="infoContent">{props.height}</span>
        </p>
        <p>
          Birth:{' '}
          <span className="infoContent">
            {dayNames[props.birth.getDay()]}{' '}
            {monthNames[props.birth.getMonth()]} {props.birth.getDate()}{' '}
            {props.birth.getFullYear()}
          </span>
        </p>
      </div>
    </div>
  );
}

export default IdCard;
