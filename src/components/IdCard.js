export default function IdCard({lastName, firstName, gender, height, birth, picture}) {
    return (
        <div id="id-card">
            <img src={picture} alt={lastName} />
            <div>
                <p><span className="label" >First name:</span><span>{firstName}</span></p>
                <p><span className="label" >Last name:</span><span>{lastName}</span></p>
                <p><span className="label" >Gender:</span><span>{gender}</span></p>
                <p><span className="label" >Height:</span><span>{height/100}m</span></p>
                <p><span className="label" >Birth:</span><span>{birth.toLocaleDateString()}</span></p>
            </div>
        </div>
    )
}