const Rating = (props) => {
  const { children } = props
  const score = Number(children).toFixed()
  let stars = []

  for (let i = 1; i < 6; i++) {
    if (i <= score) {
      stars.push('★')
    }
    else {
      stars.push('☆')
    }
  }

  console.log(score, stars.join(''))

  return (
    <div className='Rating'>
      {stars.join('')}
    </div>
  )
}

export default Rating