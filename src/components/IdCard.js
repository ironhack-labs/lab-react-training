function IdCard(props) {
  const { students } = props

  return (
    <div className="IDCard">
      <h3>{students.name}</h3>
      <p>Firstname: {students.firstname}</p>
      <p>Lastname: {students.lastname}</p>
      <p>Gender: {students.gender}</p>
      <p>Height: {students.height}</p>
      <p>Birth: {students.dateofbirth}</p>
      <p>Picture: {students.firstname}</p>

      
     
    </div>
  )
}

export default IdCard