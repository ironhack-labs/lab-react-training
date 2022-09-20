import './Random.css';

function Random({ minN, maxN }) {
    let randomN = Math.floor(Math.random() * (maxN - minN + 1) + minN)
    return (
        <div className='random-container'>
            <h4>Random value between {minN} and {maxN} => {randomN}</h4>
        </div>
    )
}

export default Random;