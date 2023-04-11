function DriverCard(props) {
const { name, rating, img, car } = props

const randomNumb =  Number(Math.round(rating))
const emptyStarPath = "./empty_star.svg"
    const fillStarPath = "./fill_star.svg"



const imgStyle = {
    width: 100,
    borderRadius: '50%',
}

const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    backgroundColor: "#4b4be6",
    margin: 10,
    marginLeft: 250,
    marginRight: 250,
    borderRadius: 10,
    color: "white" 
}

const divStyleContent = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center"
}

const pStyle = {
    display: 'flex',
    
}

 return (
    <div style={divStyle}>
    <img  style={imgStyle} src={img} />

<div>

    <p>{name}</p>
    <div>
            {randomNumb >= 1 ? <img src={fillStarPath}/>: <img src={emptyStarPath}/> }
            {randomNumb >= 2 ? <img src={fillStarPath}/>: <img src={emptyStarPath}/> }
            {randomNumb >= 3 ? <img src={fillStarPath}/>: <img src={emptyStarPath}/> }
            {randomNumb >= 4 ? <img src={fillStarPath}/>: <img src={emptyStarPath}/> }
            {randomNumb >= 5 ? <img src={fillStarPath}/>: <img src={emptyStarPath}/> }

        </div>

        <div style={pStyle}>
            
    <p>{car.model}</p>
    <p>{car.licensePlate}</p>
        </div>
</div>
    </div>
 )
}

export default DriverCard