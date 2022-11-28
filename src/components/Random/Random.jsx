import './Random.css'

const Random = (props) => {

    const {min, max} = props
    
    let randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    
    return (
        
        <div className='card'>
            <p> Random value between {min} and {max} = {randomNumber(min, max) }</p>
        </div>
    )

}

export default Random