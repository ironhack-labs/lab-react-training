
function Rating2 ({children}){
  const rating = Math.round(children)
  return(
    <div>
      <i className={`fa mx-1 fa-star${rating <= 0 ? "-o" : ""}`}> </i>
      <i className={`fa mx-1 fa-star${rating <= 1 ? "-o" : ""}`}> </i>
      <i className={`fa mx-1 fa-star${rating <= 2 ? "-o" : ""}`}> </i>
      <i className={`fa mx-1 fa-star${rating <= 3 ? "-o" : ""}`}> </i>
      <i className={`fa mx-1 fa-star${rating <= 4 ? "-o" : ""}`}> </i>
    </div>
  )
}

export default Rating2