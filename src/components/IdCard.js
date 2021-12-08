const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
    return (
        <>
        <div className="IdCard box">
           <img src={picture} alt="foto"/>
           <div className="right">
               <strong>First Name: </strong> {firstName} <br />
               <strong>Last Name: </strong> {lastName} <br />
               <strong>Gender: </strong> {gender} <br />
               <strong>Height: </strong> {height/100} m <br />
               <strong>Birth date: </strong> {birth.toDateString()} <br />
           </div>
        </div> 
        </>
    )
}

export default IdCard