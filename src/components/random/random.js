function Random ({min, max}){
    const random =  Math.floor(Math.random() * (max - min) +1) + min
  return (
    <div className="d-flex p-2 border border-2 border-primary m-1 col-4">
    <span>Random Value between {min} and {max} is {random }</span>
    </div>
  )
}

export default Random