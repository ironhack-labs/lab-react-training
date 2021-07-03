import './Random.css'

const Random = ({min, max}) => {
    const getRandNum = (minNum, maxNum) => {
        return Math.floor(Math.random() * maxNum + minNum)
    }

    const randNum = getRandNum(min, max)

    return ( 
        <span className="Random">
            {randNum}
        </span>
     );
}
 
export default Random;