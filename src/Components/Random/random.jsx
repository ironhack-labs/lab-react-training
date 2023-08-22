function Random(props){
    const {min, max} = props;

    function getRandomNumber(minNumber, maxNumber){
        return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    }
    return(
        <div>
            <p>Random value between {min} and {max} is {getRandomNumber(min, max)}</p>
        </div>
    );
}

export default Random;