import './IdCard.css'

const IdCard = ({style, lastName, firstName, country, isStudent, birth, img}) => {

    //He roto el IdCard de la primera iteración para poder aprovecharla en la de Facebook y maquetar menos
    
    
    return (
        
        <div className='card'  style={style}>

            <img src={img} />
            <div>
                <p><strong>First Name:</strong> {firstName}</p>
                <p><strong>Last Name:</strong> {lastName}</p>
                <p><strong>Country:</strong> {country}</p>
                <p><strong>Type:</strong> {isStudent ? 'Student' : 'Teacher'}</p>
                {/* <p><strong>Birth:</strong> {birth.toDateString()}</p> */}

            </div>

        </div>

    )

}

export default IdCard