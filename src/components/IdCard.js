import '../App.css' 

const IdCard = (props) => {
  const {lastName, firstName, gender, height, birth, picture}= props;

  return (
    <div className='IdCard'>
        <img src= {picture} alt="profilePic"/>
        <div className='IdCardInfo'>
            <h2>First Name: {firstName}</h2>
            <h2>Last Name: {lastName}</h2>
            <h2>Gender: {gender}</h2>
            <h2>Height: {height}</h2>
            <h2>Birth: {birth}</h2>
        </div>
    </div>
  )
}

export default IdCard;