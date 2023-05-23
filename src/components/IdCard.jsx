const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {


    const date = new Date(birth).toDateString()
    return (
        <>
            <p><b>Last Name:</b> {lastName}</p>
            <p><b>First Name:</b> {firstName}</p>
            <p><b>Gender:</b> {gender}</p>
            <p><b>Height:</b> {height} cm</p>
            <p><b>Birth:</b> {date}</p>
            <p><img src={picture} alt="profile" /></p>
        </>
    )
}

export default IdCard