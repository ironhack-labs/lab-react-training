const IdCard = (props) => {
    const myDate = props.birth.toDateString()
    return (
        <div className="IdCard">

            <img alt="pic" className="IdCardPicture" src={props.picture} />
            <p>Last Name: {props.lastName} </p>
            <p>First Name: {props.firstName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height:{props.height}</p>
            <p>Birth:{myDate}</p>
        </div>

    )
}

export default IdCard