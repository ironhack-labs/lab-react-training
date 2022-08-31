function Random(props) {
    const random = Math.floor((Math.random() * props.max) + props.min)
    return (
        <div className="Random">
            random value between {props.min} and {props.max} = {random}
        </div>
    )
}
export default Random