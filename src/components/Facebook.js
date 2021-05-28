import React, {useState} from 'react'
import profiles from '../data/berlin.json'



export default function Facebook() {

    const [button, setButton] = useState([])
    const [color, setColor] = useState('white')


    function addButtons(){
        let allCountries = profiles.map(e => e.country)
        let uniqueCountry = [...new Set(allCountries)];
        return (
            uniqueCountry.map(e => {
                return(
                    <button onClick={(e)=> filterCard(e)}>{e}</button>
                )
            })
        )
        
    }

    function filterCard(event){
        console.log('filter clicked')
        console.log('event', event.target.outerText)
        let arrayfiltered = profiles.filter(element => {
            console.log(element.country === event.target.outerText)
            // return element.country == event.target.outerText
            return element.country == event.target.outerText? setColor('blue'): setColor('white')
        })
        return arrayfiltered
    
    }

    
    console.log(profiles)
    return (
        <div>
            
            {addButtons()}
    

            {profiles.map(e => {
                return (
                    <div className='border border-dark m-4 d-flex' style={{background:color}}>
                    
                        <div style={{width: '100px', height: '100px'}}>
                            <img className='h-100' src={e.img}/>
                        </div>
                        <div className='ml-4'>
                             {color}
                            <div>First Name: {e.firstName}</div>
                            <div>Last Name: {e.lastName}</div>
                            <div>Country: {e.country}</div>
                            <div>Type: {e.type}</div>
                        </div>

                    </div>


                )
            })}
        </div>
    )
}
