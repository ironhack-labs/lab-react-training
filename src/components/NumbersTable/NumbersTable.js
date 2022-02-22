import "./NumbersTable.css"

const NumbersTable = ({ limit }) => {
    let tableArr = [...Array(limit).keys()]

   let yoqs = ""

    return (
        tableArr.map(elm => {
    
            
            if(elm % 2 === 0){
                yoqs = "red"
            } else {
                yoqs = "white"
            }

            return (
                <div>
                    <div  className={yoqs}>
                        <p>{elm}</p>
                    </div>
                </div>
            )
        })
    )
}

export default NumbersTable