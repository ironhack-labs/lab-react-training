const IdCard = (props) => {
    const { lastName, firstName, gender, height, birth, picture} = props;
    let idCardStyling = { 
        display: 'flex',
        'flex-direction': 'row',
        margin: '25px 0'}
    
    let idCardImage = {
        margin : "10px",
        width : "250px",
        height: "100px"
    }
  
    
    return(
        <div className="IdCard" style={idCardStyling}>
            <img style= {idCardImage} src={picture} alt="Please submit a Profile Picture"/>
            <div className="idTextBox" style={{"text-align": "left"}}>
                <p><strong>Surname:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height}</p>
                <p><strong>Birthday:</strong> {birth}</p>
                <p><strong>Name:</strong> {firstName}</p>
            </div>
        </div>
    )
}

export default IdCard