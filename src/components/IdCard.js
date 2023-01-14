import '../style/IdCard.css';

function IdCard(props) {

    return (
        <section className="box-id">
            <div>
                <p><b>First Name:</b> {props.firstName}</p>
                <p><b>Last Name:</b> {props.lastName}</p>
                <p><b>Gender:</b> {props.gender}</p>
                <p><b>Height:</b> {props.height}</p>
                <p><b>Birth:</b> {props.birth}</p>
            </div>
            <img className='profile-pic' src={props.picture} alt='profilepicture'/>
        </section>
    )

}

export default IdCard;