

function IdCard({ lastName, firstName, gender, height, birth, picture }) {

    console.log(lastName, firstName, gender, height, birth, picture)

    console.log('la fechaaaaaaaaaaaa', birth)


    return (

        <article>
            <img src={picture} alt="img" />
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            {/* <p>Birth: {(birth)}</p> */}
        </article>
    )
}

export default IdCard