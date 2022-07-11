import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <div className='primera-iteracion'>

            <img src={picture} alt="picture" />

            <footer>
                <h3>Last Name: </h3><p>{lastName}</p>
                <h3>First Name:</h3><p>{firstName}</p>
                <h3>Gender:</h3><p>{gender}</p>
                <h3>Height:</h3><p>{height}</p>
                <h3>Birth</h3><p>{birth.toDateString()}</p>
            </footer>

        </div>
    )
}

export default IdCard