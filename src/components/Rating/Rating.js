import './Rating.css'
const Rating = ({ children })=>{
    let str = ''
    const numStars = Math.round(Number(children))
    const strStars = num =>{
        let retStr=''
        for(let i = 0;i<num;i++){
            retStr+='★'
        }
        return retStr;
    }

    const starPad = str => str.padEnd(5, '☆')
    str = starPad(strStars(numStars))

    return (
        <div className="rating-div">
            {str}
        </div>
    )
}
export default Rating