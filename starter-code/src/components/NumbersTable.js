import React  from 'react'
import './../index.css'

const NumbersTable = (props)=>{
  const styles={
      backgroundColor :'red'
      
  }

  const  iteration = (limit) =>{
    let totalSquares = [];
    for(let i = 1 ; i <= limit ; i++){
       /*  if(i % 5 === 0){
           totalSquares.push( <div className="row">
                <div></div>
            </div>)
        } */
        if(i % 2 === 0){
            totalSquares.push(<div className="square " key={'square-'+{i}}  style ={styles}>{i}</div>)

        }else{
            totalSquares.push(<div className="square" key={'square-'+{i}} style ={{backgroundColor:'white'}}>{i}</div>)
        }
    }
    return totalSquares.map( square => square)
    }
  
        return(
            <div className="containerSquare"> 
                { iteration(props.limit)}
            </div>
        )
    
    
}

export default NumbersTable