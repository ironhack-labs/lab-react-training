const IdCard = (props) => {
    return(
        <div class="card">
            <div class="card-img">
                <img src={props.img} alt="user" />
            </div>

            <div class="card-info">
                <p><b>First name: {props.firstName}</b></p>
                <p><b>Last name: {props.lastName}</b></p>
                <p><b>Gender: {props.gender}</b></p>
                <p><b>Height: {props.height}</b></p>
                <p><b>Birth: {props.birth}</b></p>
            </div>
        </div>
    )
}

export default IdCard