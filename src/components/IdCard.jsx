

function IdCard(props) {
  return (
    <div>

        <h2>IdCard</h2>

        <p>Last name: {props.lastName}</p>
        <p>First name: {props.firstName}</p>
        <p>Genre:{props.gender}</p>
        <p>Heigth: {props.height}</p>
        <p>Birth: {props.birth.toDateString()}</p>
        <img src= {props.picture} alt= "foto"></img>

    </div>
  )
}

export default IdCard