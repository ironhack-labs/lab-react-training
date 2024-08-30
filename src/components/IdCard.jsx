
function IdCard ({lastName, firstName, gender, height, birth, picture}) {

    return (
    <div>
        <p> {lastName}</p>
        <p> {firstName}</p>
        <p> {gender}</p>
        <p> {height}</p>
        <p> {birth.toDateString()}</p>
        <p> {picture}</p>
    </div>
    )
}

export default IdCard;