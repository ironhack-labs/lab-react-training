const Random = ({ max, min }) => {
    return (
        <div>
            Random number between {min} - {max} = {Math.floor(Math.random() * (max - min)) + min}
        </div>
    )
}
export default Random