import './IdCard.css';

const Card = (props) => {
  return (
    <div class="IdCard">
      <div class="picture"><img src={props.picture} alt="alternativeImage" /></div>
      <div class="cardText">
        <h3>Last Name: {props.lastName}</h3>
        <h3>First Name: {props.firstName}</h3>
        <h3>Gender: {props.gender}</h3>
        <h3> Height: {props.height}</h3>
        <h3> Birth date: {props.birth.toDateString()}</h3>
      </div>
    </div>
  )
}


export default Card;


