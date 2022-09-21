function IdCard(props){
    const {lastName, firstName, gender, height, birth, picture} = props
    return(
        <div class="caja">
            <div class="">
             <img className="picture" src={picture}></img>
            </div>
            <div class="content">
                <p><strong>First name: </strong>{lastName}</p>
                <p><strong>Last name: </strong>{firstName}</p>
                <p><strong>Gender: </strong>{gender}</p>
                <p><strong>Height: </strong>{height}</p>
                <p><strong>Birth: </strong>{birth.toDateString()}</p>
            </div>
        </div>
    )
}

export default IdCard