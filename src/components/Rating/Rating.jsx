const Rating = (props) => {
    const arr = []

    for (let i = 0; i < 5; i++) {
        i < Math.round(props.children) ? arr.push(true) : arr.push(false)
    }


    return (
        <div>
            {
                arr.map((el, index) => {
                    return el ? <span key={index}>★</span> : <span key={index}>☆</span>
                })
            }
        </div>
    )

}

export default Rating
