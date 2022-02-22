import profiles from '../../data/berlin.json';
import ProfileCard from './Profile';
import { useState } from "react";
import './FaceBook.css'

const FaceBook = () =>{

    const countries = []
    profiles.forEach(elm => countries.push(elm.country))
    const set = new Set(countries)
    const uniqueCountries=[...set]
    const [selectedCountry, setCountry] = useState('')

 const colorCountry = (pr,index) =>{
    if(pr.country===selectedCountry){
        return <div className='blue'> <ProfileCard  key={index} {...pr} /> </div>
    }else{
        return <ProfileCard key={index} {...pr} />
    }
 }

return(
    <article>
         {uniqueCountries.map((elm,index)=>{
             return < button key={index} onClick = {()=>setCountry((state)=>state=elm)}>{elm}</button>
         })}

       
        {profiles.map((pr, index) => {return colorCountry(pr,index) })}
    </article>
    
    
)
}
export default FaceBook