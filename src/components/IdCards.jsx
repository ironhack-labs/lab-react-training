function IdCard(props) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div class="container mt-5">
      <div class="d-flex row border">
        <div class="d-flex col align-items-center border">
          <img src={props.picture} />
        </div>
        <div class="col border">
          <p>
            <b>First name: </b>
            {props.firstName}
          </p>
          <p>
            <b>Last name: </b>
            {props.lastName}
          </p>
          <p>
            <b>Gender: </b>
            {props.gender}
          </p>
          <p>
            <b>Height: </b>
            1.{props.height - 100}m
          </p>
          <p>
            <b>Birth: </b>
            {days[props.birth.getDay().toLocaleString()].slice(0, 3)}{" "}
            {month[props.birth.getMonth().toLocaleString()].slice(0, 3)}{" "}
            {props.birth.getDate().toLocaleString()}{" "}
            {props.birth.getFullYear().toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
