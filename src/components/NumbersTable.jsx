const NumbersTable = ({limit}) => {
 const list = []
 for(let i = 1; i < limit; i++)
    list.push(i)


return (
    <div>
    {
        list.map((e) => {
            return(
                <span key={e} style={{backgroundColor: e%2 === 0 ? 'red' : 'white'}}>{e}</span>
            )
        })
    }

</div>
)
}
export default NumbersTable