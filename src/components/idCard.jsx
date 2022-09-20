import './idCard.css'

function IdCard(props){
return (
    <div className="IdCard">
        <img src={props.picture} alt="id card" className='imgCard'/>
        <div className='card'>
            <p><strong>Firstname: </strong>{props.firstName}</p>
            <p><strong>Lastname: </strong>{props.lastName}</p>
            <p><strong>Gender: </strong>{props.gender}</p>
            <p><strong>Birthdary: </strong>{props.birth}</p>
            <p><strong>Height: </strong>{props.height}</p>
        </div>
    </div>
)
}

export default IdCard