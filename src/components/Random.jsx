/* eslint-disable react/prop-types */
function Random(props) {
    const { min, max } = props
    const num = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
        <div className="container">
            Random value between {min} and {max} => {num}
        </div>
    )
}

export default Random