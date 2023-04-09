function IdCard({lastName, firstName, gender, height, birth, picture }){

    
    return (
<div className="container card" style={{width: 800}}>
        <div className="row">
            <div className="col-md-4">
                <img className="mt-3" src={picture} style={{width:200}} />
            </div>
            <div className="card-body col-md-8">
                <p>First name: <span>{firstName}</span></p>
                <p>Last name: <span>{lastName}</span></p>
                <p>Gender: <span>{gender}</span></p>
                <p>Height: <span>{height}</span></p>
                <p>Birth: <span>{birth.toUTCString()}</span></p>
            </div>
        </div>
        </div>
    )

}

export default IdCard