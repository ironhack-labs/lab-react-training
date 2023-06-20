function idCard(props){
    return(
        <div className="idCard">
            <h3>{props.lastName}</h3>
            <h3>{props.firstName}</h3>
            <h3>{props.gender}</h3>
            <h3>{props.height}</h3>
            <h3>{props.birth}</h3>
            <img src={props.picture} />
        </div>
    )
}
export default idCard