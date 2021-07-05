const IdCard = ({lastName, firstName, gender, height, birth, picture}) =>{
    return (
        <section className="container-row">
            <img src={picture} width='128px' height='128px' alt={firstName}/>
            <ul>
                <li>First name: {firstName}</li>
                <li>Last name: {lastName}</li>
                <li>Gender: {gender}</li>
                <li>Height: {height}</li>
                <li>Birth: {birth.toDateString()}</li>
            </ul>
        </section>
    )
}

export default IdCard