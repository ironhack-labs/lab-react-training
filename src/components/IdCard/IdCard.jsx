function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    const birthday = birth.toString().split(' ').slice(0, 4).join(' ')
    return (
        <>
        <img src={picture} alt={firstName} />
        <p>First name: { firstName }</p>
        <p>Last name: { lastName }</p>
        <p>Gender: { gender }</p>
        <p>Height: { height }</p>
        <p>Birth: { birthday }</p>
        </>
    )
}

export default IdCard