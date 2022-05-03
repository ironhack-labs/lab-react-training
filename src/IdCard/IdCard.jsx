import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

  const prueba = birth.toString()
  // console.log(prueba)
  return (
    <article>
      <img src={picture} alt="" />
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{gender}</p>
      <p>{height}</p>
      <p>{prueba}</p>
    </article>
  )

}


export default IdCard