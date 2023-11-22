const Random = ({ min, max }) => {
    const random = Math.floor(Math.random() * (max - min + 1) + min)

    return (

        <p>Random value between {min} and {max} = {random}</p>
    )
}


export default Random