import './Random.css'

const random = ({ min, max }) => {

    let ran = Math.floor((Math.random() * (max - min)) + min);

    return (
        <div className='card'>
            <p>Random value between {min} , {max} --- {ran} </p>


        </div>
    )
}

export default random