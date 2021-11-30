import IdCard from "./IdCard"

const cards =[

    {   _id: 1,
        lastName:'Doe',
        firstName:'John',
        gender:'male',
        height:"178" ,
        birth: "1992-07-14" ,
        picture: "https://randomuser.me/api/portraits/men/44.jpg"

    },

    {
        _id: 2,
        lastName: 'Obrien',
        firstName: 'Delores',
        gender: 'female', 
        height: '172',
        birth: new Date("1988-05-11"),
        picture: "https://randomuser.me/api/portraits/women/44.jpg"

    }

]




function IdList(props){

   
        return (
        
        <div className="list">
        <h2>Student List</h2>
            {cards.map( (card) => <IdCard key={card._id} card={card}  /> )}
        </div>
    )
       

}


export default IdList