import './DriverCard.css'

const DriverCard = ({ name, rating, img, car }) => {

    const { model, licensePlate } = car

    const starsNum = Math.round(rating)

    const stars = []
    for (let i = 0; i < 5; i++) {
        if (i < starsNum) {
            stars.push(<span key={i} className="star filled"></span>)
        } else {
            stars.push(<span key={i} className="star"></span>)
        }
    }


    return (
        <div className="driverCard">
            <div>
                <img src={img} alt={name} />
            </div>
            <div>
                <h1>{name}</h1>
                <div className="star-rating">{stars}</div>
                <p> {model} - {licensePlate} </p>

            </div>

        </div>

    )
}


export default DriverCard


//     < DriverCard
// name = "Dara Khosrowshahi"
// rating = { 4.9}
// img = "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
// car = {{
//     model: "Audi A3",
//         licensePlate: "BE33ER"
// }}
// />