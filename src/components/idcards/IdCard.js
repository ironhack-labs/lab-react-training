import './IdCard.css'

function IdCard({firstName, lastName, gender, birth,  height, picture}) {

  return (
    <div className="idcard">
      <img className="imageDiv" src={picture} alt={picture}/>
        
      <h2>First Name: {firstName}</h2>
      <h2>Last Name: {lastName}</h2>
      <h2>Gender: {gender}</h2>
      {/* ``template string é backstick...*/}
      <h2>Birth: {`${birth.getDay()}/${birth.getMonth()}/${birth.getYear()}`}</h2>
      <h2>Height: {height}</h2>
      

    </div>
  );
};


export default IdCard;