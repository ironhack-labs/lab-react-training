
function IdCard(props) {
    const{user} = props

    function date (date){
        return new Date (date).toDateString();
    }

  return (
    <div className="cardId">
        <img src={user.picture} alt="profile"></img>
        <article className="cardInfo">
            <p><span>First Name: </span>{user.firstName}</p>
            <p><span>Last Name: </span>{user.lastName}</p>
            <p><span>Gender: </span>{user.gender}</p>
            <p><span>Height: </span>{user.height}</p>
            <p><span>Birth: </span> {date(user.birth)}</p>
        </article>
        

    </div>
  )
}

export default IdCard;