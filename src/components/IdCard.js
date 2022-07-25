function IdCard(props) {
    console.log(props)
    return (
        <div>
            <p>First name: {props.firstName}</p>
            <p>Last name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            {/* <p>Birth: {props.birth.date}</p> I looked it up but I don't know how to deal with date formats :/ */}
            <img src={props.picture} alt="" />
        </div>
    )
}

export default IdCard;