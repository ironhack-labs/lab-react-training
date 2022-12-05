const IdCard = (props) => {
    const { lastName, firstName, gender, height, birth, picture} = props;
    

    let idCardStyling = { 
        'backgroundColor': 'lightGrey',
        'align': 'center',
        'width' : '350px',
        'display': 'flex',
        'flexDirection': 'row',
        'alignContent' : 'center',
        'margin': 'auto'}
    
    let idCardImage = {
        'margin' : "15px",
        'width' : "110px",
        'height': "110px"
    }
  
    // console.log(props)
    return(
        <div className="IdCard" style={idCardStyling}>
            <img style= {idCardImage} src={picture} alt="Please submit a Profile Picture"/>
            <div className="idTextBox" style={{"textAlign": "left", "lineHeight": "50%"}}>
                <p><strong>Surname:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height}</p>
                <p><strong>Birthday:</strong> {birth.toDateString()}</p>
                <p><strong>Name:</strong> {firstName}</p>
            </div>
        </div>
    )
}

export default IdCard