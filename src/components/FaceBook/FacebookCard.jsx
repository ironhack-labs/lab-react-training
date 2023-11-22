import './FaceBookCard.css'

const FaceBookCard = ({ firstName, lastName, country, img, isStudent }) => {

    return (
        <div className='FacebookCard'>
            <img src={img} alt="" />
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Country: {country}</p>
            <p>Type {isStudent ? 'Student' : 'Teacher'}</p>

        </div>
    )
}

export default FaceBookCard











