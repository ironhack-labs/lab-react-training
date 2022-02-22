const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <div>
            <img src={picture} alt={firstName} />
            <div>
                First name: {firstName}
                Last name: {lastName}
                Gender: {gender}
                Height: {height}cm
                Birth: {birth.toLocaleDateString()}
            </div>

        </div>
    )
}
export default IdCard