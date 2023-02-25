export const IdCard = (props) => {
    return (
        <div className="profile-container">
            <div className="profile-pic">
                <img src={props.picture} alt="profile" />
            </div>
            <div className="person-info">
                <section>
                    <b>First Name:</b> {props.firstName}
                </section>
                <section>
                    <b>Last Name:</b> {props.lastName}
                </section>
                <section>
                    <b>Gender:</b> {props.gender}
                </section>
                <section>
                    <b>Height:</b> {(props.height.toFixed(2)) / 100}m
                </section>
                <section>
                    <b>Birth:</b> {props.birth.toDateString()}
                </section>
            </div>
        </div>
    )
}
