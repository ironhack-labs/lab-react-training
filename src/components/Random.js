function Random (props) {
    function randomNum(min, max){
        return Math.round(Math.random() * (max - min) + min);
    }

    return (
        <div className="random">
            <p>{`Random value between ${props.min} and ${props.max} => ${randomNum(props.min, props.max)}`}</p>
        </div>
    );
};

export default Random;