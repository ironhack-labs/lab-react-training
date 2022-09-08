import { useState } from "react"
import './Carousel.css'
const Carousel = (props) =>{
  const arrPerson = props.images
  const [person,setPerson] = useState(arrPerson[0])
  const changePerson = (value) =>{
    if(value === 'left'){
    setPerson(arrPerson[arrPerson.indexOf(person)- 1 >= 0 ? arrPerson.indexOf(person)- 1 : arrPerson.length - 1])
    }else if(value === 'right'){
    setPerson(arrPerson[arrPerson.indexOf(person)+ 1 < arrPerson.length ? arrPerson.indexOf(person)+ 1 : 0 ])
    }
  }
 return(
   <div className="m-2" >
    <div id='carousel'>
        <button className="m-2" value='left' onClick={(e)=>changePerson(e.target.value)}>Left</button>
        <img src={person} alt={person}/>
        <button className="m-2" value='right' onClick={(e)=>changePerson(e.target.value)} >Right</button>
    </div>
   </div>
 )

}
export default Carousel