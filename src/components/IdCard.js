function IdCard ({firstName, lastName, gender, height, birth, picture}) {
    return (
        <div className="IdCard box">
            <div>
                <img  src={picture} alt={firstName}/>
            </div>
            <div>
                <p>
                    <span>First name:</span> {firstName}
                    <br/>
                    <span>Last name:</span> {lastName} 
                    <br/>
                    <span>Gender:</span> {gender}
                    <br/>
                    <span>Height:</span> {height}m
                    <br/>
                    <span>Birth:</span> {birth}
                    <br/>
                </p>
            </div>
        </div>
    )
}

export default IdCard