
export default function IdCard(props) {
    return (
        <div className="card">
            <img src={props.picture} alt="" />
            <div className="">
                <h3><strong>First Name:</strong> {props.firstName}</h3>
                <h3><strong>Last Name:</strong> {props.lastName}</h3>
                <h3><strong>Gender:</strong> {props.gender}</h3>
                <h3><strong>Height:</strong> {props.height}</h3>
                <h3><strong>Birth:</strong> {props.birth}</h3>
            </div>
        </div>
    )
}
