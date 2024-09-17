import './IdCard.css'
function IdCard ({lastName, firstName, gender, height, birth, picture}) {
    return(
        <div className="idCard__body">
            <img className='idCard__img' src={picture}/>
        <div className='idCard__body--text'>
            <p> <strong>First Name: </strong>{firstName}</p>
            <p> <strong>Last Name: </strong>{lastName}</p>
            <p> <strong>Gender: </strong>{gender}</p>
            <p> <strong>Heigth: </strong>{height}</p>
            <p> <strong>Birth: </strong>{birth}</p>
        </div>
        </div>
    )

}
export default IdCard