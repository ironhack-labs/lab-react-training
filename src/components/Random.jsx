import './Random.css'

const Random = props => {
  const { min, max } = props
  return (
    <article className='Random'>
      <p>Random value between {min} and {max} => {Math.floor(Math.random() * (max - min) + min)}
      </p>
    </article>
  )

}

export default Random