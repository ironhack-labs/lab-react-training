import './IdCard.css'
function IdCard(lastName, firstName, gender, height, birth, image) {
    return (
    //   const date= new Date(birth).toString.split...??
    <div className="IdCard">
      <div>
        <img src={image} alt={image}></img>
      </div>

      <div>
        <p> FirstName:{firstName}</p>
        <p>LastName:{lastName}</p>
        <p>Gender:{gender}</p>
        <p> Heigth:{height}</p>
        <p> Birth: {birth}</p>
      </div>
    </div>
  );
}
export default IdCard;
