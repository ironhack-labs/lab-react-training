import {useState} from 'react'
import data from "../data/berlin.json"



function FaceBook() {
    const countries = data.map(dude => dude.country);
    const noRepeatCountries = countries.filter((country, i) => !countries.slice(i+1).includes(country))
    const [click, setClick] = useState(false);
    const [place, setPlace] = useState(noRepeatCountries);
    const [all, setAll] = useState(false)

    const toggleClick = (i) =>{
        setClick(!click)
        setPlace(noRepeatCountries[i]);

        if(place === noRepeatCountries[i]){
            setClick(!click);
        }
        if(place !== noRepeatCountries[i]){
            setClick(true);
        }  
    }
    console.log(click)
    console.log(place)

    const chooseAll = () =>{
        setAll(!all)
    }

  return (
    <div className='container'>
      <div>
        <button onClick={chooseAll} className={all ? "yes btn" : "no btn"}>All</button>
        
        {noRepeatCountries.map((country, i) =>{
            return (
                    <button 
                    onClick={()=> toggleClick(i)} 
                    className={place === country && click === true ? "yes btn" : "no btn"}
                    >{country}</button>
        )})}
      </div>

      <div className='profiles-box'>
        {data.map((dude, i) => {
            return(
                <div key={i} className={(place === dude.country && click === true) || all ? "yes profile" : "no profile"}>
                    <img src={dude.img} alt="dudeface" style={{width: "50px"}}/>
                    <div>
                      <p>First Name: {dude.firstName}</p>
                      <p>Last Name: {dude.lastName}</p>
                      <p>Country: {dude.country}</p>
                      {dude.isStudent ? <p>Type: Student</p> : <p>Type: Teacher</p>}
                    </div>
                </div>
            )
        })}
      </div>

    </div>
    
  )
}

export default FaceBook