const Random = ({min, max}) => {
    const numMax = max
    const numMin = min
    console.log(numMax, numMin)
   const randomNumber= (Math.floor(Math.random()*(numMax)) + numMin)
   console.log(randomNumber)
   return (
        <>
    <h1> Random value between {min} and {max} = {Number(randomNumber)}  </h1>
        </>
    )
}

export default Random
