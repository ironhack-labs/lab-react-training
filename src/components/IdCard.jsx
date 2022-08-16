

function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div className="id-card">
      <img src={picture} alt="profile picture" />
      <span>Last Name: {lastName}</span>
      <span>First Name: {firstName}</span>
      <span>Gender: {gender}</span>
      <span>Height: {height}</span>
      <span>Birth: {birth}</span>
    </div>
  )
}

export default IdCard