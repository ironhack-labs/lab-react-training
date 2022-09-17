function IdCard({ idArray }) {
  console.log(idArray);
  return (
    <div>
      <p>firstName: {idArray.user.firstname} </p>
      <p>lastName: {idArray.user.lastname}</p>
      <p>Gender: {idArray.user.lastname}</p>
      <p>Height:{idArray.user.height}</p>
      <p>Birth:{idArray.user.birth}</p>
      <img src={idArray.user.picture} alt="Profile Picture" />
    </div>
  );
}
export default IdCard;
//this is the boiler plate for making components
//we are talking about functional components
