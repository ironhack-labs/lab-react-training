const Random = ({ min, max }) => {

    const rand = Math.floor((Math.random() * max) + min)

    return (
        <p className='Random'> Random value bewtween {max} and {min} {'=>'} {rand}</p>
    )
}

export default Random