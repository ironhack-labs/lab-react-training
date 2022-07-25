function Random({min, max}){
function randomNumber(min, max) {
  return Math.round((Math.floor(Math.random() * max) + min) / 10) * 10
}
return(
    <>
    <h3>Random value between {min} and {max} => {randomNumber(min,max)}</h3>
    </>
)
}

export default Random