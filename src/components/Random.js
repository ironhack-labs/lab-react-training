function Random ({min, max}) {
    const randomNumber = Math.floor(Math.random() * (max - min )) + min
    
    return (
        <div className="box">
            <p>Random value between {min} and {max} ={">"} {randomNumber}</p>
        </div>
    )
}

export default Random