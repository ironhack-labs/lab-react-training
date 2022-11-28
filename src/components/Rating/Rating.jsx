const Rating = props => {
const rating = Math.round(props.children)

  return (
    <div className="rating">
          <p>{'★'.repeat(rating) + '☆'.repeat(5-rating) }</p>
    </div>
  )
}

export default Rating