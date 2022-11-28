import './IdCard.css'

const IdCard = props => {

  return (
    <article className='IdCard'>

      <img src={props.picture}></img>
      <div>
        <p>First name: {props.firstName}</p>
        <p>Last name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {`${props.birth}`}</p>
      </div>
    </article>
  )
}

export default IdCard