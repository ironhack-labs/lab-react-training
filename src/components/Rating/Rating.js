export const Rating = ({children})=>{
    console.log(typeof children)

    const emptyStar = '☆'
    const fullStar = '★'

    function stars(children){

        let rating = Math.round(parseFloat(children));
        let arrayResult = [];

        for (let i=0 ; i<=5 ; i++){
            if(i<=rating){
arrayResult.push(fullStar)} else {
    arrayResult.push(emptyStar)
}
        }
      
      return arrayResult.join('')

    }

    return (

<p> {stars(children)}</p>
    )
}