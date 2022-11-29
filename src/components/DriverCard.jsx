import './DriverCard.css'

const DriverCard = props => {

    const { name, rating, img, car } = props

    const ratingnum = (Math.round(props.children))
    const fullStar = '★'
    const emptyStar = '☆'


    return (
        <div className='DriverCard'>
            <img src={img}></img>
            <h3>{name} </h3>
            <h3> {car.model} - {car.licenceplate}</h3>
            <p>{fullStar.repeat(ratingnum)}{emptyStar.repeat(5 - ratingnum)} </p>

        </div>
    )

}

export default DriverCard




