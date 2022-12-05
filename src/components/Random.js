const Random = (props) => {
    const {min, max} = props
    const randomValue = Math.floor(Math.random()*(max - min) + min)
    return(
        <h4 style={{'border':'solid', 'fontSize': '1.75em'}}> Random value between {min} and {max} {'=>'} {randomValue}</h4>
    );
}

export default Random