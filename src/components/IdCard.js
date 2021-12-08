
//IdCard.js
const IdCard = ({lastName,firstName, gender, height, birth, picture }) => {
    
    //console.log(characters)
    return (
        <>
          <div className="IdCard box">
              <img src={picture} alt=""/>
              <div className="right">
                  <strong> First Name:</strong>{firstName}<br/>
                  <strong>Last Name:</strong> {lastName}<br/>
                  <strong>Gender:</strong> {gender}<br/>
                  <strong>Height:</strong> {height/100}<br/>
                  <strong>Birth:</strong> {birth.toDateString()}<br/>
              </div>

          </div>
        </>
    )
}

export default IdCard