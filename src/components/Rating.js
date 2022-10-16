import Stars from "./Stars"

const Rating = ({children}) => {
  return (
    <div>
      <Stars value={children}/>
    </div>
  )
}

export default Rating