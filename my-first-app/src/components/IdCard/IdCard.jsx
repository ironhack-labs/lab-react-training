
const IdCard = ({ lastName, firstName, picture, gender, height, birth, }) => {
    return (
        <article>
            <h2>{lastName} {firstName}</h2>
            <img src={picture} style={{ width: '100px' }} />
            <p>{gender} su altura {height} y su fecha de cumpleaños</p>
        </article>
    )
}

export default IdCard