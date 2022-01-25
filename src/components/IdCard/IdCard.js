import './IdCard.css'

export const IdCard = ({ firstName, lastName, birth, heigth, gender, picture }) => {
    return (
        <div className="id-card-div">
            <div>
                <img src={picture} alt='user-img'></img>
            </div>
            <div>
                <p>
                    <strong>First name: </strong>{firstName}<br/>
                    <strong>Last name: </strong>{lastName}<br/>
                    <strong>Gender: </strong>{gender}<br/>
                    <strong>Height: </strong>{heigth}<br/>
                    <strong>Birth: </strong>{birth.toDateString()}
                </p>
            </div>
        </div>
    )
}