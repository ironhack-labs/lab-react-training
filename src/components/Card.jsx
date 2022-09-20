function Cards(props) {
    return (<>
        <div><img src={props.picture} className="picture" alt="picture" /></div>
        <div className="cardText">
            <h3>First Name: {props.firstName}</h3>
            <h3>Last Name: {props.lastName}</h3>
            <h3>Gender: {props.gender}</h3>
            <h3>Height: {props.height}</h3>
            <h3>Birth: {props.birth.toDateString()}</h3>
        </div>

    </>
    )
}

export default Cards;
