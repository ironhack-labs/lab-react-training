
const Random = props => {
    const { min, max } = props 
    const randomNum =  Math.floor(Math.random() * (max - min) + min)

    return (
    <p> Random Value Between {min} and {max} = {randomNum} </p>
    )

   }


export default Random