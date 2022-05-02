function IdCard({ lastName, firstName, gender, birth, picture }) {

    return (
        <div>
            <img src={picture} alt="example"></img>
            <p>Last name = {lastName}</p>
            <p>First name = {firstName}</p>
            <p>Gender = {gender}</p>
            <p>Birth = {birth.toString()}</p>

        </div>


    )
}

export default IdCard

