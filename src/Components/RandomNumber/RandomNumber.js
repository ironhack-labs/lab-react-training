export const RandomNumber = (props) => {
    const {min, max} = props;
    const numberRandom = Math.floor(Math.random() * max) + min;

    return (
        <div className="RandomNumber">
            <p>Random value between {min} and {max} => {numberRandom}</p>
        </div>
    )
}