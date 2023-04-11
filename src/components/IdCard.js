

function IdCard(props) {
        const {lastName, firstName, gender, height, birth, picture} = props

        const divStyle = {
            display: "flex",
            border: "1px solid black",
            alignItems: "center",
            margin: 10
        }
        const imgStyle = {
            width: 150,
            height: 150
        }

        return (
            <div style={divStyle}>
            <img style={imgStyle} src={picture}/>
            <div>
                <p> <strong>Firstname</strong> : {firstName}</p>
                <p> <strong>lastName</strong> : {lastName}</p>
                <p> <strong>Gender</strong> : {gender}</p>
                <p> <strong>Height</strong> : {height}</p>
                <p> <strong>Birth</strong> : {birth.toLocaleDateString()}</p>
                </div>
            </div>
        )
}

export default IdCard