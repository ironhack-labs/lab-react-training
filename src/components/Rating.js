


const Rating = props => {
    let numstars = Math.round(Number(props.children))
    let numempty = 5-numstars

    return (
        <div>
            <p className="stars">{"★".repeat(numstars)}{"☆".repeat(numempty)}</p>
        </div>
    )
}

export default Rating