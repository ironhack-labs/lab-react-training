const Random = ({min, max}) => {
    const random = Math.floor(Math.random() * (max-min) + min);
    return (
        <div className="border border-dark mb-2">
            <p>Random value between {min} and {max} => {random}</p>
        </div>
    )
}

export default Random