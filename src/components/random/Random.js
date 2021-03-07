

function Random({ min, max }) {

    const random = Math.floor(Math.random() * max) + min;

    return (
        <div className="card max-card-width" >
            <div className="card-body">
                <h5 className="card-title">Random value between {min} and {max} : {random}</h5>
            </div>
        </div>
    );
}

export default Random;