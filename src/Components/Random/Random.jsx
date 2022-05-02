const Random = (props) => {

    const rndInt = Math.floor(Math.random() * (props.max - props.min + 1) + props.min)


    return (
        <div>
            <p>Random Value between {props.min} and {props.max} = {rndInt}</p>
        </div>
    )
}

export default Random