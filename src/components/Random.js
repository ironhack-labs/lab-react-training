function Random({min, max}){


    return (
        <div class="container card" style={{width:800}}>
            <p>Random value between {min} and {max} = &gt; {Math.floor(Math.random() * (max - min) + min)}</p>
        </div>
    )

}

export default Random