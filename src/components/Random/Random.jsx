import './Random.css'

function Random({ min, max }) {
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return ( 
        <div className='Random-container'>
            <h5>Random Value between { min } and { max } = { randomNumber }</h5>
        </div>
     );
}

export default Random;