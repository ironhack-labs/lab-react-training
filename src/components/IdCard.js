function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <article>
      <img src={picture} alt={lastName} />
      <ul>
        <li>First Name: {firstName}</li>
        <li>Last Name: {lastName}</li>
        <li>Gender: {gender}</li>
        <li>Gender: {height}</li>
        <li>Birth: {birth.toDateString()}</li>
      </ul>
    </article>
  );
}

export default IdCard;
