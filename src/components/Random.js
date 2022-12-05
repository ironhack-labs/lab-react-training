const Random = (props) => {
    const {min, max} = props
    const randomValue = Math.floor(Math.random()*(max - min) + min)
    return(
        <p> Random value between {min} and {max} {'=>'} {randomValue}</p>
    );
}

export default Random