function Random ({ min,max }){
    return(
        <div className="my-greeting-card">
            Random value between {min} and {max} {'=>'} {Math.floor(Math.random()*(max-min)+min)}
        </div>
    )
 
}

export default Random 