import './IdCard.css'

const IdCard = (props) => {
    const {lastName, firstName, gender, height, birth, picture} = props;
    console.log(birth)
    return (
    <div className="IdCard">
        <div>
            <img src={picture} alt="Profile"/>
        </div>    
        <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Birth: {birth.toDateString()}</p>
        </div>
      </div>
    );
  }
  
  export default IdCard;