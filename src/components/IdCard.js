import './IdCard.css'

function IdCard(props) {
    // console.log(props.user)

    const {lastName, firstName, gender, height, birth, picture} = props.user


    
    return (
      <div className="IdCard">
        <img src={picture} alt="user phto"/>
        <ul>
            <li><strong>First Name: </strong>{firstName}</li>
            <li><strong>Last Name: </strong>{lastName}</li>
            <li><strong>Gender: </strong>{gender}</li>
            <li><strong>Height: </strong>{height}</li>
            <li><strong>Birth: </strong>{new Date (birth).toDateString()}</li>    
        </ul>  
      </div>
    );
}


 export default IdCard;