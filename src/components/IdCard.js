function IdCard({ firstname, lastname, gender, height, birth, picture }) {
  return (
    <div className="IdCard">
      <div>
        <img className="profilePic" src={picture} alt="Profile Picture" />
      </div>

      <div className="otherInfos">
        <p className="Infos">
          <b>firstName: </b> {firstname}
        </p>
        <p className="Infos">
          <b>lastName: </b> {lastname}
        </p>
        <p className="Infos">
          <b>Gender: </b>
          {gender}
        </p>
        <p className="Infos">
          <b>Height: </b>
          {height}
        </p>
        <p className="Infos">
          <b>Birth: </b>
          {birth}
        </p>
      </div>
    </div>
  );
}
export default IdCard;
//this is the boiler plate for making components
//we are talking about functional components
