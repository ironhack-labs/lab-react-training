import './App.css';
import {BoxColor, CreditCard, Greetings, IdCard, LikeButton, Random, Rating} from './components'
import { useState, useEffect } from "react"
import { DriverCard } from './containers';



function App() {

    const [posts, setPosts] = useState([])
    const [dataDrivers, setDataDrivers] = useState([])
    const [dataRating, setDataRating] = useState([])
    const [dataMinMax, setDataMinMax] = useState([])
    const [dataCreditCard, setDataCreditCard] = useState([])
    const [dataBoxColor, setDataBoxColor] = useState([])


    const [idComponent, setIdComponent] = useState(false)
    const [greetingsComponent, setGreetingsComponent] = useState(false)
    const [randomComponent, setRandomComponent] = useState(false)
    const [boxComponent, setBoxComponent] = useState(false)
    const [creditCardComponent, setCreditCardComponent] = useState(false)
    const [ratingComponent, setRatingComponent] = useState(false)
    const [driverComponent, setDriverComponent] = useState(false)
    const [likeComponent, setLikeComponent] = useState(false)
    const [pageToRender, setPageToRender] = useState(null)

    const names = ["Amanda ", "Marcelo", "Gabriel", "Renata", "Julia", "Carol", "Matheus"]

    useEffect(() => {
      fetch('berlin.json')
          .then((res) => res.json())
          .then((data) => {
            setPosts(data)
          })
          .catch((err) => {
            console.log(err.message)
          })
    }, [])

    useEffect(() => {
      fetch('drivers.json')
          .then((res) => res.json())
          .then((data) => {
            setDataDrivers(data)
          })
          
          .catch((err) => {
            console.log(err.message)
          })
    }, [])

    useEffect(() => {
      fetch('rating.json')
          .then((res) => res.json())
          .then((data) => {
            setDataRating(data)
          })
          
          .catch((err) => {
            console.log(err.message)
          })
    }, [])

    useEffect(() => {
      fetch('minMax.json')
          .then((res) => res.json())
          .then((data) => {
            setDataMinMax(data)
          })
          
          .catch((err) => {
            console.log(err.message)
          })
    }, [])

    useEffect(() => {
      fetch('creditCard.json')
          .then((res) => res.json())
          .then((data) => {
            setDataCreditCard(data)
          })
          
          .catch((err) => {
            console.log(err.message)
          })
    }, [])

    useEffect(() => {
      fetch('boxColor.json')
          .then((res) => res.json())
          .then((data) => {
            setDataBoxColor(data)
          })
          
          .catch((err) => {
            console.log(err.message)
          })
    }, [])

    const handleClikcIdCard = () => {
      setIdComponent(!idComponent)
      setPageToRender('idComponent')

    }

    const hanldeClickGreetings = () => {
      setGreetingsComponent(!greetingsComponent)
      setPageToRender('greetingsComponent')

    }

    const  handleClickRandom = () => {
      setRandomComponent(!randomComponent)
      setPageToRender('randomComponent')

    }

    const handleClickBoxColor = () => {
      setBoxComponent(!boxComponent)
      setPageToRender('boxColorComponent')

    }

    const handleClickCreditCard = () => {
      setCreditCardComponent(!creditCardComponent)
      setPageToRender('creditCardComponent')

    }

    const handleClickRating = () => {
      setRatingComponent(!ratingComponent)
      setPageToRender('ratingComponent')


    }

    const handleClikcDiverCard = () => {
      setDriverComponent(!driverComponent)
      setPageToRender('driverComponent')


    }

    const handleClickLikeButton = () => {
      setLikeComponent(!likeComponent)
      setPageToRender('likeComponent')

    }

    const exercise = [
      {nameButton: "Id Card", handleClick:() => handleClikcIdCard()}, 
      {nameButton: "Greetings", handleClick:() => hanldeClickGreetings()}, 
      {nameButton: "Random", handleClick:() => handleClickRandom()}, 
      {nameButton: "Box Color", handleClick:() => handleClickBoxColor()},
      {nameButton: "Credit Card", handleClick:() => handleClickCreditCard()},
      {nameButton: "Rating", handleClick: () => handleClickRating()},
      {nameButton: "Driver Card", handleClick:() => handleClikcDiverCard()}, 
      {nameButton: "LikeButton", handleClick: () => handleClickLikeButton()}
    ]

  return (
    <>
      <div className="App">
        <div className="buttons">
          {exercise.map((value) => {
            return(
              <button key={value.nameButton} onClick={() => value.handleClick()}>{value.nameButton}</button>
            )
          })}
        </div>
        {pageToRender === 'idComponent' && <IdCard array={posts} />}
        {pageToRender === 'greetingsComponent' && <>
          {names.map((name) => {
            return(
              <Greetings personName={name} />
            )
          })}
        </>}
        {pageToRender === 'randomComponent' && dataMinMax && <>
          {dataMinMax.map((minMax) => {
            return(
              <Random  min={minMax.min} max={minMax.max}/>
            )
          })}
        </>
        }
        {pageToRender === 'boxColorComponent' && dataBoxColor && <>
          {dataBoxColor.map((color) => {
            return(
              <BoxColor hex={color.bgColor} />
            )
          })}
        </>}
        {pageToRender === 'creditCardComponent' && dataCreditCard && <>
          {dataCreditCard.map((creditCard) => {
            return(
              <CreditCard 
              type={creditCard.type}
              bgColor={creditCard.bgColor}
              number={creditCard.number} 
              expirationMonth={creditCard.expirationMonth} 
              expirationYear={creditCard.expirationYear}
              owner={creditCard.owner}
              bank={creditCard.bank}
              />
            )
          })}
        </>}
        {pageToRender === 'ratingComponent' && dataRating && <>{
          dataRating.map((rating) => {
            return(
              <Rating rat={rating.rating} />
            )
          })}
        </>}
        {pageToRender === 'driverComponent' && dataDrivers && <>{
          dataDrivers.map((dataDrivers) => { return(
          <DriverCard  
            picture={dataDrivers.img}
            alt={dataDrivers.img} 
            rat={dataDrivers.rat} 
            nameDriver={`${dataDrivers.firstName} ${dataDrivers.lastName}`} 
            car={dataDrivers.car} 
            license={dataDrivers.license} 
          />
        )})}
        </>
        }
        {pageToRender === 'likeComponent' && <LikeButton />}
      </div>
    </>


  );
}

export default App;
