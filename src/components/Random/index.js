import "./index.css"



export const Random = ({min, max}) => {
  let randomNumber = Math.floor((Math.random() * (max - min + 1)) + min)
  
  return (
    <div className="Random">
      <p> Random value between {min} and {max} = {randomNumber} </p>
    </div>
  )
}
