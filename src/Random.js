
const Random = (props) => {

    const { min, max } = props
    const randomNumber = Math.floor((Math.random()* max )+ min )

    return <p>Random Value between {min} and {max} ={'>'} {randomNumber} </p>
}






export default Random