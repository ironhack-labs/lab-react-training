import './DriverCard.css'

const DriverCard = (props) => {
    // console.log(props);
    const { model, licensePlate } = props.car

    let numberStart = Math.round(props.rating)

    let ratingString
    switch (numberStart) {
        case 0:
            ratingString = '☆☆☆☆☆'
            break;

        case 1:
            ratingString = '★☆☆☆☆'
            break;

        case 2:
            ratingString = '★★☆☆☆'
            break;

        case 3:
            ratingString = '★★★☆☆'
            break;

        case 4:
            ratingString = '★★★★☆'
            break;

        case 5:
            ratingString = '★★★★★'
            break;

        default:
            ratingString = ''
    }


    return (
        <>
            <img></img>
            <div className>{props.name}</div>
            <p className='rating'>{ratingString}</p>
            <p className=''>{model} - {licensePlate}</p>

        </>
    )






}

export default DriverCard;