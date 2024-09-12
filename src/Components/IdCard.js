function IdCard(props) {
    const {lastName, firstName, gender, height, birth, picture} = (props);

  return (
    <div>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth.toDateString()}</p>
        <img src={picture}/>


    </div>
  )
}

export default IdCard