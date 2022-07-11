import './IdCard.css'

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    return (
        <div className="card">
            <img src={picture} alt="imagen" />
            <div>
                <span><b>First Name:</b> {firstName}</span>
                <br />
                <span><b>Last Name:</b> {lastName}</span>
                <br />
                <span><b>Gender:</b> {gender}</span>
                <br />
                <span><b>Height:</b> {height}m</span>
                <br />
                <span><b>Birth:</b> {birth.toDateString()}</span>
            </div>
        </div>
    )
}

export default IdCard

