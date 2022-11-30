const Random = props => {
    const {min , max} = props;
    return (
        <h2>Random value between {min} and {max} =>
        {Math.floor(Math.random() * (max - min) + min)}</h2>
    )
}

export default Random;