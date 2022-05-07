const Random = ({min, max}) => {
    return (
        <p>Random value between {min} and {max} => {Math.round(Math.random()*max)+1} </p>
    )
}

export default Random;

