import './FacebookCard'

const FacebookCard = ({ firstName, lastName, country, img, isStudent, selected }) => {
    return (
        <div className={`facebook ${selected ? 'cardSelected' : ''}`}>
            <img className='img' src={img} alt="img" />
            <div className='letras'>
                <p><strong>first Name: </strong>{firstName}</p>
                <p><strong>last Name: </strong> {lastName}</p>
                <p><strong>Country: </strong> {country}</p>
                <p>{isStudent ? 'Student' : 'Teacher'}</p>
            </div>

        </div>)
}


export default FacebookCard