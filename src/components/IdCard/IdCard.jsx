function IdCard(props) {
    const {firstName, lastName, gender, height, birth, picture} = props;
   
     return (
      <div className='card'>
       <img src={picture} /> 
       <p><b>First Name:</b> {firstName}</p>
       <p><b>Last Name:</b> {lastName}</p>
       <p><b>Gender:</b> {gender}</p>
       <p><b>Height:</b> {height}</p>
       <p><b>Birth:</b> {birth}</p>
     </div>
    ) 
   }
   
   export default IdCard;