import React from 'react';


function Facebook({data}) {
    console.log("data", data)

    return (
        <div>
            <div>
                {
                data.map(
                    (item, idx) => {
                        return (
                        <div key={item.firstName}>
                            <div className="image">
                                <img style={{width:'100px'}} src={item.img} alt="fbk-img" />
                            </div>
                            <p>First Name: {item.firstName} </p>
                            <p>Last Name: {item.lastName} </p>
                            <p>Country: {item.country} </p>
                            <p>Type: {item.isStudent?'student':'teacher'} </p>
                        </div>
                        )
                    }
                )
            }
            </div>
        </div>
    )
}



export default Facebook;
