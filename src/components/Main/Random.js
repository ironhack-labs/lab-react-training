
const Random = () => {
let random1 = Math.floor(Math.random()*6+1)
let random2 = Math.floor(Math.random()*100+1)
    return (
        <>
        <div style={{borderStyle: "solid", margin:5}}>
            <p>Random value between 1 and 6 = {random1}</p>
            </div>
            <div style={{borderStyle: "solid", margin:5}}>
            <p>Random value between 1 and 100 = {random2}</p>
            </div>
            
        
        </>
    )
}

export default Random
