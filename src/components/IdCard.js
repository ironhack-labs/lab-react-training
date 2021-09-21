function IdCard(props) {
    console.log(props)
    return (
        
        <div className="iteration1">
            <img src={props.picture} alt="" />
<div className="<>p-container">
                <p className="iteration1-p">First name: {props.firstName}</p>
            <p className="iteration1-p">Last name: {props.lastName}</p>
            <p className="iteration1-p">Gender: {props.gender}</p>
            <p className="iteration1-p">Height: {props.height}</p>
            <p className="iteration1-p">Birth: {props.birth.toDateString()}</p>
</div>
        </div>
    )
}
export default IdCard