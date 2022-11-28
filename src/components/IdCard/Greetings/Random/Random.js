
function Random(props) {

    const { min, max } = props

    const six = Math.floor(Math.random() * (max - min) + min)

    return (
        <div>
            <p>Random value between {min} and {max} => {six} </p>
        </div>
    )

}


export default Random