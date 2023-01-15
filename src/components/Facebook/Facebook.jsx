import { useState } from 'react'
import FacebookProfiles from '../../data/berlin.json'
import './Facebook.css'

function Facebook(){
    const [country,setCountry] = useState("all")

    const filterByCountry = (event)=>{
        const country = event.target.value
        setCountry(country)
    }

    return(
        <div>
        <div className='buttons-country'>
            <button onClick={(e)=>filterByCountry(e)} value="all" className='margin-r'>All</button>
            <button onClick={(e)=>filterByCountry(e)} value="USA" className='margin-r'>USA</button>
            <button onClick={(e)=>filterByCountry(e)} value="ENGLAND" className='margin-r'>ENGLAND</button>
            <button onClick={(e)=>filterByCountry(e)} value="GERMANY" className='margin-r'>GERMANY</button>
            <button onClick={(e)=>filterByCountry(e)} value="MALAYSIA" className='margin-r'>MALAYSIA</button>
            <button onClick={(e)=>filterByCountry(e)} value="SWEDEN" className='margin-r'>SWEDEN</button>
            <button onClick={(e)=>filterByCountry(e)} value="NIGERIA" className='margin-r'>NIGERIA</button>
            <button onClick={(e)=>filterByCountry(e)} value="SCOTLAND" className='margin-r'>SCOTLAND</button>
            <button onClick={(e)=>filterByCountry(e)} value="ITALY" className='margin-r'>ITALY</button>
            <button onClick={(e)=>filterByCountry(e)} value="FRANCE" className='margin-r'>FRANCE</button>
        </div>
        <div className='flex-specific'>
        
            {FacebookProfiles.map(contact=>{
                return <div>
                {contact.country.toLowerCase() === country.toLowerCase() 
                ? <div className='facebook-card dynamic-blue'>
                    <img className='small' src={contact.img}/>
                    <div className='flex-c flex-ctry'>
                    <h3><span className='bold'>First Name: </span>{contact.firstName}</h3>
                    <h3><span className='bold'>Last Name: </span>{contact.lastName}</h3>
                    <h3><span className='bold'>Country: </span>{contact.country}</h3>
                    {contact.isStudent 
                    ? <h3><span className='bold'>Type: </span>Student</h3>
                    : <h3><span className='bold'>Type: </span>Teacher</h3>
                    }
                    </div>

                </div>
                : <div className='facebook-card'>
                    <img className='small' src={contact.img}/>
                    <div className='flex-c flex-ctry'>
                    <h3><span className='bold'>First Name: </span>{contact.firstName}</h3>
                    <h3><span className='bold'>Last Name: </span>{contact.lastName}</h3>
                    <h3><span className='bold'>Country: </span>{contact.country}</h3>
                    {contact.isStudent 
                    ? <h3><span className='bold'>Type: </span>Student</h3>
                    : <h3><span className='bold'>Type: </span>Teacher</h3>
                    }
                    </div>

                </div>}
                
                </div> 
            })}
        </div>
        </div>
    )
}

export default Facebook