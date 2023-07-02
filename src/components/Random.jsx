const Random = (props) => {
    const randomNumber = Math.round(Math.random() * (props.max - props.min + 1) + props.min)

    return(
        <div className="card">
            <p>Random value between {props.min} and {props.max} =&gt; {randomNumber}</p>
        </div>
    )
}

export default Random