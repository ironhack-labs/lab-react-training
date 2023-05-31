const IdCard = (props) => {

    const formattedBirth = props.birth.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })
    return(
        <div class="card">
            <div class="card-img">
                <img src={props.picture} alt="user" />
            </div>

            <div class="card-info">
                <p><b>First name: {props.firstName}</b></p>
                <p><b>Last name: {props.lastName}</b></p>
                <p><b>Gender: {props.gender}</b></p>
                <p><b>Height: {props.height}</b></p>
                <p><b>Birth: {formattedBirth}</b></p>
            </div>
        </div>
    )
}

export default IdCard