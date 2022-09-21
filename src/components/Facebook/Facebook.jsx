import './Facebook.css'

function Facebook({ firstName, lastName, country, img, isStudent }) {
    const type = isStudent ? 'Student' : 'Teacher'

    return (
        <div className="student-container">
            <div>
                <img src={img} alt="" width="150px" />
            </div>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Country: {country}</p>
                <p>Type: {type}</p>
            </div>
        </div>
    )
}

export default Facebook