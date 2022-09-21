//import berlin from '../data/berlin.json';
import mydata from '../data/mydata.json'
import IdCard from './IdCard';
import { v4 as uuid } from "uuid"
//import IdCards from './IdCards.css';

function IdCardlist(props){

return(

  <div>
<h1>List of people </h1>
<div className="Boxpeople"> 
{
    mydata.map(Berlin =>{

  return <IdCard key = {uuid()} picture = {Berlin.picture} lastName = {Berlin.lastName} firstName = {Berlin.firstName} gender = {Berlin.gender} height = {Berlin.height} birth = {Berlin.birth}   />
        
    })
}
</div>
  </div>

)}
             
export default IdCardlist;