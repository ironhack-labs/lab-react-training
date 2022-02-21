
const Rating = props => {
    const { children } = props
    let rt = Math.round(children)
    let stars = ''
    let top=5

    for(let i=0;i<top;i++){
       if(i < rt){
           stars +='★'
       }else{
           stars +='☆'
       }
    }
    return (
       <p>{stars}</p>

    )
}

export default Rating;