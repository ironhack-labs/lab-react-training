const Rating = (props) => {
    const rating = Math.round(props.children)

    //Create an array with a lenght of 5 => fill with filled stars => fill with empty stars => convert to string => eliminate the commas
    const arrayRating = new Array(5).fill('★', 0, rating).fill('☆', rating).toString().replaceAll(',', '')
    return (
        <div className="Rating">
            <p>{arrayRating}</p>
        </div>
    )
}

export default Rating