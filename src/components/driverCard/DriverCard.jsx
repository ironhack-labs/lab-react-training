function DriverCard({ name, rating, img, car }) {
    const { model, licensePlate } = car

    const s = {
        0: "☆☆☆☆☆",
        1: "★☆☆☆☆",
        3: "★★☆☆☆",
        4: "★★★★☆",
        5: "★★★★★"
    }

    let stars = Math.round(rating)

    return (
        <div className="card-driver">
            <div className="img-card">
                <img src={img} />
            </div>
            <div className="data-card">
                <p>{name}</p>
                <p>{s[stars]}</p>
                <p>{model} - {licensePlate}</p>
            </div>
        </div>
    )

    // return (
    //     <div className="starts">
    //         {s[stars]}
    //     </div>
    // )

}
export default DriverCard;