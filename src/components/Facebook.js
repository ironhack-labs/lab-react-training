import React, {useState} from 'react'
import profiles from '../data/berlin.json';
export default function FaceBook() {


   const [data, setData] = useState(profiles)
   const unique = [...new Set(data.map(item => item.country))]


   function colorFilter(pais){
       const newArr = data.map((e,id)=>{
           if(pais===e.country){
               return {
                   ...e,
                   backgroundColor:"blue"
               }
            }else{
                return {
                    ...e,
                    backgroundColor:"white"
                }
            }
        })

        setData(newArr)

}

  
    return (
        <div>
            {
                unique.map((e,id)=>{
                    return(
                        <button onClick={()=>colorFilter(e)} >{e}</button>
                    )
                })
            }
                <ul>
            {data.map((e, id)=>{
                return(
                    <>
                        <li key={id}>
                        
                        <div style={{backgroundColor:e.backgroundColor}} className="idCards">
                            <img width="200"src={e.img}/>
                            <div>
                            <p>First Name: {e.firstName}</p>
                            <p>Last Name: {e.lastName}</p>
                            <p>Country: {e.country}</p>
                            <p>Type: {e.isStudent? "Student" : "Teacher"}</p>
                            </div>
                        </div>
                        </li>
                    </>
                )
            })}
            </ul>
        </div>
    )
}