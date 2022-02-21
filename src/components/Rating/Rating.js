
const Rating = (props) =>{
const {children} = props

    let stars = ''

let roundNumber = Math.round(children)
switch (roundNumber){
    case 0: 
        stars = '✧✧✧✧✧'
        break;
    case 1:
        stars = '✦✧✧✧✧'
        break;
    case 2:
        stars = '✦✦✧✧✧'
        break;
    case 3:
        stars = '✦✦✦✧✧'
        break;
    case 4:
        stars = '✦✦✦✦✧'
        break;
    case 5:
        stars = '✦✦✦✦✦'
}

    return(
    <p>{stars}</p>

    )
} 

export default Rating
