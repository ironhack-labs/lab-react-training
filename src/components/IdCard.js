function IdCard({ firstname, lastname, gender, height, birth, picture }) {
  return (
    <div>
      <p>firstName: {firstname} </p>
      <p>lastName: {lastname}</p>
      <p>Gender: {lastname}</p>
      <p>Height:{height}</p>
      <p>Birth:{birth}</p>
      <img src={picture} alt="Profile Picture" />
    </div>
  );
}
export default IdCard;
//this is the boiler plate for making components
//we are talking about functional components
