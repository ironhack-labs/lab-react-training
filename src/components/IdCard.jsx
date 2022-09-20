import './IdCard/IdCard.css';


const IdCard = (props) => {
    return (
      <div>
    
      <p>{props.lastName}</p>
      <p>{props.firstName}</p>
      <p>{props.gender}</p>
      <p>{props.height}</p>
          <p>{props.birth.toDateString()}</p>
            {<img src={props.picture} />}
            </div>
    
  );
};

export default IdCard;
