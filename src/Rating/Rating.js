import '../Rating/Rating.css'

function Rating (props) {
    const valoration = props.children
    let  rating = ""

    if (valoration < 0.5) {
        rating = '☆☆☆☆☆';
      } else if (valoration >= 0.5 && valoration < 1.5) {
        rating = '★☆☆☆☆';
      } else if (valoration >= 1.5 && valoration < 2.5) {
        rating = '★★☆☆☆';
      } else if (valoration >= 2.5 && valoration < 3.5) {
        rating = '★★★☆☆';
      } else if (valoration >= 3.5 && valoration < 4.5) {
        rating = '★★★★☆';
      } else if (valoration >= 4.5) {
        rating = '★★★★★';
      }

    return (
        <div>
            <p>{rating}</p>
        </div>
    )
}

export default Rating