const IdCard = (props: {
  lastName: any;
  firstName: any;
  gender: any;
  height: any;
  birth: any;
  picture: any;
}) => {
  const { lastName, firstName, gender, height, birth, picture } = props;
  const idCardStyle = {
    display: "flex",
    alignItems: "center",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/M4.jpg")',
    margin: "20px",
    padding: "10px",
  };

  const pictureStyle = {
    marginRight: "10px",
    width: "300px",
    height: "250px",
  };

  const infoStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    fontSize: "20px",
    fontFamily: "BentonSans",
    padding: "0px",
    margin: "0px",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div className="id-card" style={idCardStyle}>
      <div className="picture">
        <img src={picture} alt="Profile" style={pictureStyle} />
      </div>
      <div className="info" style={infoStyle}>
        <p className="card-text">
          <strong>First Name: </strong> {firstName}
        </p>
        <p className="card-text">
          <strong>Last Name: </strong> {lastName}
        </p>
        <p className="card-text">
          <strong>Gender: </strong> {gender}
        </p>
        <p className="card-text">
          <strong>Height: </strong> {height} cm
        </p>
        <p className="card-text">
          <strong>Birth: </strong> {birth}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
