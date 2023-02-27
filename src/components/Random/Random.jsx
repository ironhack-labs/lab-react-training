import './Random.css'

const Random = ({ min, max }) => {

    let random = Math.floor(Math.random() * (max - min + 1)) + min

    return (

        < div className="Random" >
            <p> Random value between {min} and {max} = {random}</p>
        </div >
    )
}

export default Random