const Random = ({ min, max }) => {
  const number = Math.round(Math.random() * (max - min) + min)
  return (
    <h3>
      Random value between {min} and {max} =&gt; {number}
    </h3>
  )
}

export default Random
