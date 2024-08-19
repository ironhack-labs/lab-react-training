/* eslint-disable react/prop-types */
function IdCard(props) {
    const { firstName, lastName, gender, height, birth, picture } = props

    return (
        <div className="idCard">
            <img src={picture}></img>
            <div>
                <p><span style={{'fontWeight': 'bold'}}>First Name:</span> {firstName}</p>
                <p><span style={{'fontWeight': 'bold'}}>Last Name:</span> {lastName}</p>
                <p><span style={{'fontWeight': 'bold'}}>Gender:</span> {gender}</p>
                <p><span style={{'fontWeight': 'bold'}}>Height:</span> {height}</p>
                <p><span style={{'fontWeight': 'bold'}}>Birth:</span> {birth.toDateString()}</p>
            </div>
        </div>
    )
}

export default IdCard