const Random = props => {
    const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + Number(min));

    return (
        <div className="card">
            A random value between {props.min} and {props.max} {'=>'} {randomNum(props.min, props.max)}
        </div>
    )
}

export default Random;