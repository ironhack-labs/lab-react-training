import './IdCard.css'
const IdCard = (props) => {
    const { firstName, lastName, gender, height, birth, picture } = props;

    return (
        <>
            <div className='all'>
                <img src={picture} alt="Profile"></img>
                <div className='description'>
                    <p><strong>First Name:</strong> {firstName}</p>
                    <p><strong>Last Name:</strong> {lastName}</p>
                    <p><strong>Gender:</strong> {gender}</p>
                    <p><strong>Height:</strong> {height}</p>
                    <p><strong>Birth:</strong> {birth.toDateString()}</p>
                </div>

            </div>




        </>
    );
}

export default IdCard;
