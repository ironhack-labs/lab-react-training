const IdCard = (props) => {
    const { picture, firstName, lastName, gender, height, birth } = props

    return (
        <div classname="IdCard">
            <img src={picture} />

            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Birth: {birth}</p>
        </div>
    )
}

export default IdCard