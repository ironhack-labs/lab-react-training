import './IdCard.css'

const IdCard = (props) => {

const {lastName, firstName, gender, height, birth, picture} = props
    
    return (
        
        <div className='card'>

            <img src={picture} />
            <div>
                <p><strong>First Name:</strong> {firstName}</p>
                <p><strong>Last Name:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height}</p>
                <p><strong>Birth:</strong> {birth.toDateString()}</p>

            </div>

        </div>

    )

}

export default IdCard