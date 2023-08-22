const Random = ({ min, max }) => {

    const random = Math.floor(Math.random() * (max - min) + min)

    return (

        <p>{random}</p>
    )

}
export default Random