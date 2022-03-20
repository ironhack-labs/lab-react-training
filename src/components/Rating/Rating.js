import './Rating.css'

const Rating = ({ children }) => {

    const childrenNumberFormat = Math.round(Number(children))
    let starsEmpy = ['☆','☆','☆','☆','☆']

   for (let i = 0; i < childrenNumberFormat; i++ ){
        if (starsEmpy[i] === '☆') {
            starsEmpy[i] = '★'
        }
   }

    return(
        <div className='stars-container'>
            <p>{starsEmpy}</p>
        </div>
    )
}

export default Rating