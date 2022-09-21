const Random = (props) => {
    let random = Math.floor(Math.random(props.min) * props.max)
    return (
        <div>
            <p>
                {random}
            </p>
        </div>
    )

}

export default Random