import './IdCard.css'

function IdCard({ data }) {
  return (
    <div className="Card">
      <img src={data.picture} className="CardPicture" alt="pic" />
      <div className="CardBody">
        <p className="CardText">First name: {`${data.firstName}`}</p>
        <p className="CardText">Last name: {`${data.lastName}`}</p>
        <p className="CardText">Gender: {`${data.gender}`}</p>
        <p className="CardText">Height: {`${data.height}`}</p>
        <p className="CardText">Birth:</p>
      </div>
    </div>
  );
}

export default IdCard;
