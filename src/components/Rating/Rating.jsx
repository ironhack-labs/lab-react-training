const Rating = props => {

    const rating = Math.round(props.children)

    return (
        <section className="Rating">
            <p>{'★'.repeat(rating) + '☆'.repeat(5 - rating)}</p>
        </section>
    )
}

export default Rating