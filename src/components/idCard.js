
import React from 'react'
import './idCard.css';



const IdCard = (props) => {
    console.log(props)


    return (
        <div className='card' >

            <div className='img-div'>
                <img className='foto' src={props.picture} alt='foto' />
            </div>
            <div className='list-information'>

                <ul>
                    <li>  <p> <b> Last Name:</b> {props.lastName}</p>  </li>
                    <li><p><b> First Name:</b> {props.firstName} </p></li>
                    <li> <p><b> Gender:</b> {props.gender}</p>  </li>
                    <li> <p><b> Height:</b> {props.height}</p> </li>
                    <li> <p><b> Birth:</b> {props.birth}</p>  </li>
                </ul>
            </div>
        </div>



        // <ul>

        // <li> <label className="lastName">{children}</label> </li>
        // <li> <label className="firstName">{children}</label></li>
        // <li> <label className="gender">{children}</label>
        // <li> <label className="height">{children}</label>
        // <li> <label className="birth">{children}</label>
        // <li> <label className="picture">{children}</label>

        // </ul> 

    )
}


export default IdCard