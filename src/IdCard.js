import React from 'react';

 const Id = (props)=>{
    return <div className="box-card">
    <img src={props.picture} alt="User picture" className="img-card"/>
    <id/>
    <div>
    <h2> <b>First Name :</b> {props.firstName}</h2>
    <h2><b> Last Name : </b>{props.lastName}</h2>
    <h2> <b>Genre : </b>{props.gender}</h2>
    <h2><b> Height: </b>{props.height}</h2>
    <h2><b> birth : </b>{props.birth.toString()}</h2>
    </div>
    </div>
    }

export default function IdCard () {
    return (
        <div>
    <Id
      lastName='Doe'
      firstName='John'
      gender='male'
      height={178}
      birth={new Date("1992-07-14")}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
    />

    <Id
      lastName='Delores '
      firstName='Obrien'
      gender='female'
      height={172}
      birth={new Date("1988-05-11")}
      picture="https://randomuser.me/api/portraits/women/44.jpg"
    />   
        </div>
    )
}




