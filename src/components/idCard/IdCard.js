import './idCard.css'

const IdCard = props => {
    const getHeigth = height => height / 100 + 'm';

    const getBirthDate = birthDate => birthDate.toDateString();

    return (
        <div className="card">
            <div className="profile-pic">
                <img src={props.picture} alt={props.firstName + ' profile picture'}/>
            </div>
            <div className="content">
                <p><b>First name</b>: {props.firstName}</p>
                <p><b>Last name</b>: {props.lastName}</p>
                <p><b>Gender</b>: {props.gender}</p>
                <p><b>Height</b>: {getHeigth(props.height)}</p>
                <p><b>Birth</b>: {getBirthDate(props.birth)}</p>
            </div>
        </div>
    )
}

export default IdCard