export default function Icards(props) {

  return (
    <div className="tarjeta">
           <span className="imagen">
             <img src={props.picture} alt="" />
           </span>
           <span className="datos">
               <div><strong><span>First Name</span></strong>:<span>{props.firstName}</span></div>
               <div><strong><span>Last Name</span></strong>:<span>{props.lastName}</span></div>
               <div><strong><span>Gender</span></strong>:<span>{props.gender}</span></div>
               <div><strong><span>Height</span></strong>:<span>{props.height}</span></div>
               <div><strong><span>Birth</span></strong>: <span>{props.birth}</span></div>
           </span>
    </div>
  )
}


/*
export default function Icards() {
    const[newIcard, setNewIcard] = ({
        lastName: "Doe",
        firstName: "",
        gender: "",
        height: "",
        birth: "",
        picture: ""
    })

    const[]
}*/

