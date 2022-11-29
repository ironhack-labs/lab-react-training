export default function IdCard({
  firstName,
  lastName,
  gender,
  height,
  birth,
  picture,
}) {
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  const birthday = new Intl.DateTimeFormat('en', options)
    .format(birth)
    .replace(',', ' ');

  return (
    <div className="idcard-container boxed-border">
      <div className="picture-container">
        <img src={picture} alt={lastName} />
      </div>
      <div className="data-container">
        <div>
          <strong>First Name:</strong> {firstName}
        </div>
        <div>
          <strong>Last Name:</strong> {lastName}
        </div>
        <div>
          <strong>Gender:</strong> {gender}
        </div>
        <div>
          <strong>Height:</strong> {height}
        </div>
        <div>
          <strong>Birth:</strong> {birthday}
        </div>
      </div>
    </div>
  );
}
