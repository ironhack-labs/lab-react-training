const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const Random = ({min, max, ...props}) => {
    return(
        <div>
            <p>{`Random value between ${min} and ${max} => ${randomNum(min,max)}`}</p>
        </div>
    );
};

export default Random;