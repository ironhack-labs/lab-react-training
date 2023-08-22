import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <>
            <div className='greetingsContainer'>
                <div className='imgContainer'>
                    <img src={picture} alt="profile pic" />
                </div>
                <div className="greetingsData">
                    <p><strong>First name: </strong>{firstName}</p>
                    <p><strong>Last name:</strong> {lastName}</p>
                    <p><strong>Gender:</strong> {gender}</p>
                    <p><strong>Height:</strong> {height}</p>
                    <p><strong>Birth: </strong>{birth.toString().slice(0, 16)}</p>
                </div>

            </div>

        </>
    )
}

export default IdCard