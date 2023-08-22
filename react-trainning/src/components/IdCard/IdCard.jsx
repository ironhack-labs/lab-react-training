const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (

        <>
            <div>
                <img src={picture} alt={`${firstName} ${lastName}`} />
            </div>

            <div>
                <p><strong>First Name:</strong> {firstName}</p>
                <p><strong>First Name:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height} m</p>
                <p><strong>Birth:</strong> {birth.toDateString()}</p>
            </div>
        </>

    )
}

export default IdCard