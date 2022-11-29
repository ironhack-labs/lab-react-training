import './id-card.css'

const IdCard = (props) => {
    const idDate = props.birth.toDateString()
    return (
        <div className="id-card">
            <img src={props.picture}></img>
            <div>
                <p>
                    <b>First Name:</b> {props.firstName}
                </p>
                <p>
                    <b>Last Name: </b>{props.lastName}
                </p>
                <p>
                    <b>Gender:</b>
                </p>
                <p>
                    <b>Height:</b> {props.height}
                </p>
                <p>
                    <b>Birth: </b>{idDate}
                </p>
            </div>
        </div>
    )
}

export default IdCard