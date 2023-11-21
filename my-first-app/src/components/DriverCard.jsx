const DriverCard = (({ name, rating, img, car: { model, licensePlate } }) => {

    {
        if (Math.round(rating) == 0) {
            return (
                <div className="DriverCard">
                    <article>
                        <figure>
                            <img src={img} alt={name} />
                        </figure>
                    </article>
                    <div>
                        <h1>{name}</h1>
                        <h3>☆☆☆☆☆</h3>
                        <p>{model} - {licensePlate}</p>
                    </div>
                </div>
            )
        }
        else if (Math.round(rating) == 1) {
            return (
                <div className="DriverCard">
                    <article>
                        <figure>
                            <img src={img} alt={name} />
                        </figure>
                    </article>
                    <div>
                        <h1>{name}</h1>
                        <h3>★☆☆☆☆</h3>
                        <p>{model} - {licensePlate}</p>
                    </div>
                </div>
            )
        }
        else if (Math.round(rating) == 2) {
            return (
                <div className="DriverCard">
                    <article>
                        <figure>
                            <img src={img} alt={name} />
                        </figure>
                    </article>
                    <div>
                        <h1>{name}</h1>
                        <h3>★★☆☆☆</h3>
                        <p>{model} - {licensePlate}</p>
                    </div>
                </div>
            )
        }
        else if (Math.round(rating) == 3) {
            return (
                <div className="DriverCard">
                    <article>
                        <figure>
                            <img src={img} alt={name} />
                        </figure>
                    </article>
                    <div>
                        <h1>{name}</h1>
                        <h3>★★★☆☆</h3>
                        <p>{model} - {licensePlate}</p>
                    </div>
                </div>
            )
        }
        else if (Math.round(rating) == 4) {
            return (
                <div className="DriverCard">
                    <article>
                        <figure>
                            <img src={img} alt={name} />
                        </figure>
                    </article>
                    <div>
                        <h1>{name}</h1>
                        <h3>★★★★☆</h3>
                        <p>{model} - {licensePlate}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="DriverCard">
                    <article>
                        <figure>
                            <img src={img} alt={name} />
                        </figure>
                    </article>
                    <div>
                        <h1>{name}</h1>
                        <h3>★★★★★</h3>
                        <p>{model} - {licensePlate}</p>
                    </div>
                </div>
            )
        }
    }
})

export default DriverCard