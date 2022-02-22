import './NumbersTable.css'

const NumbersTable = ({limit}) =>{

const numberIt = ()=>{
    let arr = []
    for (let i = 1; i <= limit; i++) {
       arr.push(i)
     }
     return arr
}
    
    return(
     <article className="art">
            {numberIt().map((box, index) => {return index % 2 == 0 ? <p className="white" key={index}>{box}</p> :
                <p className="red" key={index}>{box}</p>})}                   
     </article>
    )
}

export default NumbersTable