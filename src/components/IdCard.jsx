function IdCard(props){
  const {lastName, firstName, gender, height, birth, picture} = props
  const formattedBirth = birth.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  });
  return (
    <div className="IdCard box">
      <img src={picture} alt="{firstName}" />
      <div className="right">
      <strong>First name: {firstName}</strong>
      <strong>Last name: {lastName}</strong>
      <strong>Gender: {gender}</strong>
      <strong>Height: {height}</strong>
      <strong>Birth: {formattedBirth}</strong>
    </div>
    </div>

  )
}

export default IdCard