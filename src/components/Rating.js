const Rating = (props) =>{
    const number = Math.round(props.children)
 return(
    <div className='h1' >
    {'★'.repeat(number)}{'☆'.repeat(5-number)}
    </div>
 )
}
export default Rating