const random = props => {
    const { min,max} = props
    let rand = Math.floor(Math.random()*(max-min))+min

    return (
        <>
            <h2>Random value between {min} and {max} es {rand}</h2>
        </>

    )
}

export default random;