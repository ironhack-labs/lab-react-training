import('./IdCard.css')
function IdCard(props) {
    return (
        <div className="card">
            <div>
                <img src={props.picture} alt="" />
            </div>
            <div>
                <p><strong>First Name: </strong>{props.firstName}</p>
                <p><strong>Last Name: </strong>{props.lastName}</p>
                <p><strong>Height: </strong>{props.height}</p>
                <p><strong>Birth </strong>{props.birth}</p>
            </div>
        </div>
    )
}

export default IdCard