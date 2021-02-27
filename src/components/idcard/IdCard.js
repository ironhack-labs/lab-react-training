
function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    return (
        <div className="container">
            <div className="card">
                <div className={$lastName} {$firstName} {$gender} {$height} {$birth} {$picture}></div>
            </div>
        </div>
    )
}

IdCard.defaultProps = {
    lastName: "String",
    firstName: "String",
    gender: "String",
    height: "Number",
    birth: Date,
    picture: "String"
}

export default IdCard;