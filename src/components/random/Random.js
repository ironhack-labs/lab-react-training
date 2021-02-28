
const Random = ({min, max}) => {
    
    const random = Math.floor(Math.random() * (max-min) + min);
    return (

        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-10">
                    <div className="card-body">
                        <p>Random value between {min} and {max} => {random}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Random;