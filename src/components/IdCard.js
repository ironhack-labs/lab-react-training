
export default function IdCard(props) {
    return (
        <div>
            <img src={props.picture} alt="profile" />
            <h3><b>First Name:</b> {props.firstName}</h3>
            <h3><b>Last Name:</b> {props.lastName}</h3>
            <h3><b>Gender:</b> {props.gender}</h3>
            <h3><b>Height:</b> {props.height}</h3>
        </div>
    )
}
