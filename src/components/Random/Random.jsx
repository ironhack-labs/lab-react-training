const Random = (props) => {
    const randomNumber = Math.floor(Math.random() * (props.max - props.min)) + props.min;
    return (
        <>
            <div className="random-card" key={props.lastName}>
                <div>
                    <h2>Random value between {props.min} and {props.max} is {randomNumber}</h2>
                </div>
            </div>
        </>
    );
};

export default Random;