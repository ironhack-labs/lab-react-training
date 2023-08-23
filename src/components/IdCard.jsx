function IdCard (props){

    const stringedBirth = props.birth.toDateString()

    return(
        <div>
            <img src={props.picture} alt="id picture" />
            <p>First name: {props.firstName}</p>
            <p>Last name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Birth: {stringedBirth}</p>
        </div>
    )
}

export default IdCard