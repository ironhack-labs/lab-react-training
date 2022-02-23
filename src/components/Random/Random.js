import "./Random.css"


const Random = ({min, max}) => {

   let number = Math.floor(Math.random() * (max - min) + min)

    return(
        <article>
      <p>Random value between {min} and {max} ⮕ {number} </p>
        </article>
    )
}

export default Random