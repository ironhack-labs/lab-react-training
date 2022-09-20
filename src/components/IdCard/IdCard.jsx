import './IdCard.css';




const IdCard = (props) => {


    return (
        <>
          <div className="divProfileCard">
            <img
            src={props.profilePic}
            className="profilePic"
            alt="profilePic"
            />
            <ul className='idCardData'>
                <li className="firstName">
                <strong>First name:</strong> {props.firstName}

                </li>
                <li className="lastName">
                <strong> Last name:</strong> {props.lastName}
                </li>
                <li className="gender">
                <strong>Gender:</strong> {props.gender}

                </li>
                <li className="height">
                <strong>Height:</strong> {props.height}

                </li>
                <li className="birth">
                <strong>Birth:</strong> {props.birth}

                </li>
            </ul>
            </div>
        </>
    )
    
}

export default IdCard