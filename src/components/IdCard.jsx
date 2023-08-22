function IdCard (props){
  const {lastName, firstName, gender, height, birth, picture} = props;

  const birthString = birth.toDateString();

    return(
        <div>
            <img src={picture} alt={firstName}/>
            <div>
                <h3>First Name: {firstName}</h3>
                <h3>Last Name: {lastName}</h3>
                <h3>Gender: {gender}</h3>
                <h3>height: {height}</h3>
                <h3>birth: {birthString}</h3>
            </div>
        </div>

    )
}

export default IdCard