const FacebookCard = ({ firstName, lastName, country, img, isStudent }) => {

    return (
        <div className="FaceBookCard">
            <img src={img} style={{width:'200px'}}alt="" />
            <p>FirstName: {firstName}</p>
            <p>LastName: {lastName}</p>
            <p>Country: {country}</p>
            <p>{isStudent ? 'Student' : 'Teacher'}</p>
        </div>
    )
}

export default FacebookCard