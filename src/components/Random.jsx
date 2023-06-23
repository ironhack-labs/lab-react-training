function Random(props) {
const {min, max} = props;

    return (
        <div className="random">
            <p>Random value between {min} and {max} => {Math.floor(Math.random() * (max - min + 1) + min)}</p>
        </div>
    )
}

export default Random;