export default function Rating(props) {

    let number = Math.round(props.children)
    let stars = '★'.repeat(number) + '☆'.repeat( 5 - number );

  return (
    <div>{stars}</div>
  )
}
