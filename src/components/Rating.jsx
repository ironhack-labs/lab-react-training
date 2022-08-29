import './Rating.styles.css'


export const Rating = (props) => {
 const { rat } = props
 console.log(rat)


 const rating = (val) => {
  switch(true){
   case (val >= 1 && val < 2):
    return "★ ☆ ☆ ☆ ☆"
   case (val >= 2 && val < 3):
    return "★ ★ ☆ ☆ ☆"
   case (val >= 3 && val < 4):
    return "★ ★ ★ ☆ ☆"
   case (val >= 4 && val < 5):
    return "★ ★ ★ ★ ☆"
   case (val >= 5):
    return "★ ★ ★ ★ ★"
   default:
    return ("☆ ☆ ☆ ☆ ☆")
  }
 }

 return(
  <div className='rating'>
   <span>{rating(rat)}</span>
  </div>
 )
}