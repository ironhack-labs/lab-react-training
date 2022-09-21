import './random.css'
function Random({min, max}){
const random = Math.floor(Math.random()*(max - min)+min)

return(
    <div className='random'>
       <p> Random value between {min} and {max} = {random}</p>
    </div>
)
}

export default Random