
// Functional component


const IdCard = ({ IdInfo }) => {

// Destructuring the object


    const { lastName, firstName, gender, height, birth, picture } = IdInfo;

    const newBirth = new Date(birth).toDateString();

    // values obtained from the extracted properties

    return (
        <div className='IdInfo'>
            <div>
                <ul>
                    <li><p> Last name: {lastName} </p></li>
                    <li><p> First name: {firstName} </p></li>
                    <li><p> Gender: {gender} </p></li>
                    <li><p> Height: {height} </p></li>
                    <li><p> Date of birth: {newBirth} </p></li>
                    <li><img src={picture} alt="Profile" /></li>
                </ul>
            </div>
        </div>
    );
};

export default IdCard;
