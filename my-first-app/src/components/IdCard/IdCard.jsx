
const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <div>
            <article>
                <h3>First Name{firstName}</h3>
                <h3>Last Name{lastName}</h3>
                <h3>Gender{gender}</h3>
                <h3>Height{height.toString()}</h3>
                <h3>Birth{birth.toString()}</h3>
                <img src={picture} alt={firstName} />

            </article>
        </div>
    )
}

export default IdCard





