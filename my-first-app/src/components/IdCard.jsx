const IdCard = (({ lastName, firstName, gender, height, birth, picture }) => {
    const birthday = birth.toString().substring(0, 15)

    return (
        <div className="IdCard">
            <section>
                <figure>
                    <img src={picture} alt={firstName} />
                </figure>
            </section>
            <section>
                <p><strong>First Name: </strong>{firstName}</p>
                <p><strong>Last Name: </strong>{lastName}</p>
                <p><strong>Gender: </strong>{gender}</p>
                <p><strong>Height: </strong>{height}</p>
                <p><strong>Birth: </strong>{birthday}</p>
            </section>
        </div>
    )
})

export default IdCard