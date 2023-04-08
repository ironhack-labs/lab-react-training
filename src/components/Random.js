function Random({min, max}){

    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min

    return (
        <>
            <p>Your random value is {randomValue}</p>
        </>
    )

}

export default Random