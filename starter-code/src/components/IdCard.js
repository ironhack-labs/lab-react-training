import React from 'react';

const idCard = (props) => {
let Obj = props.props;
let bt = Obj.birth.toDateString();

return(
<div className = 'cardContainer'>
<div className ='cardPhoto'>
    <img width = '150px' height ='150px' src ={Obj.picture}/>
</div>
<div className ='CardInfo'>
<p><b>First Name: </b> {Obj.firstName}</p>
<p><b>Last Name: </b>{Obj.lastName}</p>
<p><b>Gender: </b>{Obj.gender} </p>
<p><b>Height: </b>{Obj.height}</p>
<p><b>Birth: </b>{bt} </p>
</div>
</div>
)
};

export default idCard;