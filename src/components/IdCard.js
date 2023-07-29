const IdCard = (props) => {
    return <div>
        <img src={props.picture}/>
        <div>
            <h5>First name: </h5> <span>{props.firstName}</span>
            <h5>Last name: </h5> <span>{props.lastName}</span>
            <h5>Gender: </h5> <span>{props.gender}</span>
            <h5>Height: </h5> <span>{props.height}</span>
            <h5>Birth: </h5> <span>{props.birth}</span>
        </div>
    </div>
    }

export default IdCard;