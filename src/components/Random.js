const Random = ({ min, max }) => {

    const random  = (min, max) => {

        return Math.floor(Math.random() * (max - min + 1) + min);    

    }

    return (
        <div className="Random border my-2 p-1" style={{ 'maxWidth': '800px', margin: '0 auto' }}>

            <h3 className="fw-light">
                Random value between {min} and {max} ➡️ {random(min, max)}
            </h3>

        </div>
    );
}

export default Random