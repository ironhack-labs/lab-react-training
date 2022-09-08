import './NumbersTable.css'
const NumbersTable = (props) => {
    const arrNumber = []
    const count = () => {
       for(let i = 1 ; i <= props.limit;i++){
         arrNumber.push(i)
       }
       return arrNumber
    }
    count()
   return(
    <div className='m-2'>
        <table>
        <tbody>
         <tr>
            {arrNumber.map((number)=>{
             return <td style={{background: number % 2 === 0 ?'red':'white',border:'2px solid black'}} >{number}</td>
            })}
         </tr>
         </tbody>
        </table>
    </div>
   )
}
export default NumbersTable