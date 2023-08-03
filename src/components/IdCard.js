import "./IdCard.css"

const IdCard = ({picture, firstName, lastName, gender, height, birth}) => {

    const main = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
    
    const container = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
    
    return (
                    <div style={main}>
                        <div>
                            <img src={picture}/>
                        </div>
                        <div>
                            <div style={container}>
                                <h5>First name: </h5> <span>{firstName}</span>
                            </div>
                            <div style={container}>
                                <h5>Last name: </h5> <span>{lastName}</span>
                            </div>
                            <div style={container}>
                                <h5>Gender: </h5> <span>{gender}</span>
                            </div>
                            <div style={container}>
                                <h5>Height: </h5> <span>{height}</span>
                           </div>
                            <div style={container}>
                                <h5>Birth: </h5> <span>{birth}</span>
                            </div>
                        </div>
                </div>
 
    )}

export default IdCard;