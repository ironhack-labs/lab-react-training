function IdCard({ firstName, lastName, gender, height, birth, picture }) {
    return (
        <div className="idCard border-dark">
            <div className="d-flex">
                <img src={picture} alt="Card image cap" />
                <div className="contact-info">
                <ul className="list-group">
                    <li>First Name: {firstName}</li>
                    <li>Last Name: {lastName}</li>
                    <li>Gender:{gender}</li>
                    <li>Height:{height}</li>
                    <li>Birth:{birth.toDateString()}</li>
                </ul>

                </div>

            </div>
        </div>
    );
}
export default IdCard