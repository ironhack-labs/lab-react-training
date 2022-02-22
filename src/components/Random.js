
export default function Random(props) {

    const random = Math.floor(Math.random() * props.max) + 1

    return (
        <div>
            <p>Random value between {props.min} and {props.max} = {random}</p>
        </div>
    )
}
