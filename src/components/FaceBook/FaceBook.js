import profiles from "../../data/berlin.json"

function FaceBook() {
    return(
        <div>
            {profiles.map((elem) => {
                return (
                    <div>
                        <img style={{width: "100px"}} src={elem.img} alt={elem.firstName}/>
                        <div>
                            <p>First Name: {elem.firstName}</p>
                            <p>Last Name: {elem.lastName}</p>
                            <p>Country: {elem.country}</p>
                            <p>Type: {elem.isStudent ? "Student" : "Teacher"}</p>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default FaceBook