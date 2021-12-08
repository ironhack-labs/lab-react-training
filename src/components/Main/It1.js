
const idCard = [
    {
      'lastName':'Doe',
      'firstName':'John',
      'gender':'male',
      'height':178,
      'birth':new Date("1992-07-14"),
      'picture':"https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      'lastName':'Delores ',
      'firstName':'Obrien',
      'gender':'female',
      'height':172,
      'birth':new Date("1988-05-11"),
      'picture':"https://randomuser.me/api/portraits/women/44.jpg"
    }
        ]

const IdCard = () => {
    return (
<>

{idCard.map((e, index) => (
    <>
    <div className="container" style={{display:"flex", flexDirection:"row", borderStyle: "solid", margin:5}}>

    <div key={index} id="foto">
       <img src={e.picture} alt=''/>                                
    </div>
    <div id="datos">
       <p>First Name:{e.firstName}</p>
       <p>Last Name:{e.lastName}</p>
       <p>gender:{e.gender}</p>
       <p>Height:{e.height}</p>
       <p>Birth:{e.birth.toString()}</p>

</div>

</div>
    
    </>
                            ))}
</>
    )
}

export default IdCard