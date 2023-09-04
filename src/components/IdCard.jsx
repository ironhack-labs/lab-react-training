export default function IdCard({
  lastName,
  firstName,
  gender,
  height,
  birth,
  picture,
}) {
  const birthString = birth.toLocaleDateString('EN-us', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const formattedHeight = height / 100;

  return (
    <div className="IdCard">
      <img src={picture} alt="" />
      <div>
        <p>
          <b>First name: </b>
          <span>{firstName}</span>
        </p>
        <p>
          <b>Last name: </b>
          <span>{lastName}</span>
        </p>
        <p>
          <b>Gender: </b>
          <span>{gender}</span>
        </p>
        <p>
          <b>Height: </b>
          <span>{formattedHeight}m</span>
        </p>
        <p>
          <b>Birth: </b>
          <span>{birthString}</span>
        </p>
      </div>
    </div>
  );
}
