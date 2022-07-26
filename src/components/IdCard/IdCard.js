export const IdCard = ({
    lastName,
    firstName,
    gender,
    height,
    birth,
    picture
  }) => {

    const birthday = (birth.toString()).slice(0,15)
     
  return (
    <div>
    <img src={picture} alt="profilePic" />
      <p> lastName={lastName}</p>
      <p>firstName={firstName}</p>
      <p>gender={gender}</p>
      <p>height={height}</p>
      <p>birth = {birthday} </p>
      
    </div>
  );
};

/* 




      
      <p>birth={birth}</p>
*/
