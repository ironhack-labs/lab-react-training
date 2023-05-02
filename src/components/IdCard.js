function IdCard(props) {
    return (
        <div className="IdCard">
            <p > First Name:{props.firstName}</p>
            <p > Fast Name:{props.lastName}</p>
            <p > Gender:{props.gender}</p>
            <p > Height:{props.height}</p>
            <p > Birth:{props.birth.toLocaleString("de")}</p>
            <img src={props.picture} className="IdCArd" alt="pic"/>
        </div>

    )
}

export default IdCard
