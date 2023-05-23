
const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
    const date = new Date(birth).toDateString()
    return(
        <div>
            <img src={picture} alt=""></img>
            <p> <b>First name</b>: {lastName}</p>
            <p><b>Last name</b>: {firstName}</p>
            <p><b>Gender</b>: {gender}</p>
            <p><b>Height</b>: {height}</p>
            <p><b>Birth</b>: {date}</p>
        </div>
    )
}

export default IdCard;