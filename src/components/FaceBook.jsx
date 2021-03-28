import React from 'react'
import '../assets/css/FaceBook.css'


const FaceBook = ({profiles, clickCountrie, choosenCountry}) => {
const Cerobee = require('clerobee')
const cerobee = new Cerobee( 20 )

    const getCountries = () => {
        let countriesArr = []
        profiles.map((profile) => {
            if(!countriesArr.includes(profile.country)){
                countriesArr.push(profile.country)
            }
        })

        return countriesArr
    }

    const changeColor = (profile) => {
        if(profile.country === choosenCountry){
            return true
        }else{
            return false
        }
    }
    let color = ''
    return (
        
        <div className="FaceBook">
        <div className='d-flex justify-content-center flex-wrap '>
        {getCountries().map((countrie,index) => (
            <div key={index}>
            <button className='mx-1' onClick={clickCountrie}>{countrie}</button>
            </div>
        ))}
        </div>
        <div className='UsersList'>
         {profiles.map((profile) => (
           <div> 
              <div className='d-none'>{ changeColor(profile) ? color= '#8ac4d0' : color = 'white' }</div> 
                <div key={cerobee.generate()} style={{backgroundColor: color}} className='facebook__user d-flex' >
                    <div className='px-3 py-3'>
                        <img src={profile.img} alt="" width='200'/>
                    </div>
                    <div className='d-flex flex-column px-4 justify-content-center'>
                        <p><b>Fist Name:</b> {profile.firstName}</p>
                        <p><b>Last Name:</b> {profile.lastName}</p>
                        <p><b>Country:</b> {profile.country}</p>
                        {profile.isStudent ? <p><b>Type:</b>Student</p> : <p><b>Type:</b>Teacher</p>}
                    </div>
                </div>
            </div> 
         ))}
         </div>   

        </div>
    )
  }

export default FaceBook