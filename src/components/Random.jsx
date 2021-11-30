
const Random = (props) => {

    const {max} = props;

    let randomNum =  Math.floor(Math.random() * max) + 1;

    return (
        <div className="randomNum">
            <p>Random Num between 1 and {max.toFixed(0)} is: {randomNum}</p>
        </div>
    )
}

export default Random
