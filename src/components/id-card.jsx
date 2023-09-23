function IdCard(prop) {
    return (
        <div className="border border-dark d-flex flex-row p-1 m-2">
            <img src={prop.picture} alt="" />
            <div className="text-start ms-1">
                <div><strong>First name:</strong> {prop.firstName}</div>
                <div><strong>Last name:</strong> {prop.lastName}</div>
                <div><strong>Gender:</strong> {prop.gender}</div>
                <div><strong>Height:</strong> {prop.height}</div>
                <div><strong>Birth:</strong> {prop.birth.toDateString()}</div>
            </div>
        </div>
    );
}

export default IdCard;