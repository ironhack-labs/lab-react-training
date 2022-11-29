import './random.css'

const Random = props => {
    const { max, min } = props
    return (

        <p > Random value between  to  {Math.floor(Math.random() * max) + min}</p>,
        <p> Random value between {min} to {max}  {Math.floor(Math.random() * max) + min}</p>
    )

}

export default Random

