function Random({ min, max }) {
    let random = Math.floor(Math.random() * (max - min + 1)) + min
    return (
        <div>
            Random value between {min} and {max} = {random}
        </div>
    )
}

export default Random