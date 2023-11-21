const IdCard = (props) => {
    return (
        <div>
            <img src={props.picture} alt="men" />

            <ul className="list">
                <li>First name: {props.firstName}</li>
                <li>Last name:{props.lastName}</li>
                <li>Gender: {props.gender}</li>
                <li>Height: {props.height}</li>
                <li>Birth: {props.birth.toString()}</li>
            </ul>
        </div>
    )

}


export default IdCard