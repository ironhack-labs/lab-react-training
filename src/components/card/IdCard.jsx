import('./IdCard.css')
function IdCard(props) {
    return (
        <div className="card">
            <div>
                <img src={props.user.picture} alt="" />
            </div>
            <div>
                <p><strong>First Name: </strong>{props.user.firstName}</p>
                <p><strong>Last Name: </strong>{props.user.lastName}</p>
                <p><strong>Height: </strong>{props.user.height}</p>
                <p><strong>Birth </strong>{props.user.birth}</p>
            </div>
        </div>
    )
}

export default IdCard