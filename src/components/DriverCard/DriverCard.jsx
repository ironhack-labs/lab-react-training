import './DriverCard.css'
import Rating from '../Rating/Rating'


const DriverCard = ({ name, rating, img, car: { model, licensePlate } }) => {

    const stars = Math.round(rating)

    const rate = (
        stars === 5 ? <div className='rate'>★★★★★</div> :
            stars === 4 ? <div className='rate'>★★★★☆</div> :
                stars === 3 ? <div className='rate'>★★★☆☆</div> :
                    stars === 2 ? <div className='rate'>★★☆☆☆</div> :
                        stars === 1 ? <div className='rate'>★☆☆☆☆</div> :
                            stars === 0 ? <div className='rate'>☆☆☆☆☆</div> :
                                stars
    )

    return (
        <div className='license' style={{
            width: '100%',
            height: '15rem',
            marginTop: '2rem',
            backgroundColor: '#5355b1',
            color: 'white'
        }}>
            <img className='picture' src={img} />

            <div className="infoLicense">
                <h1>{name}</h1>
                <p>{rate}</p>
                <p>{model} - {licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard