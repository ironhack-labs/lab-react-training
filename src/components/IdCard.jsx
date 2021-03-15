import React from 'react'
function IdCard(prop){
return <section><img src={prop.picture}/>
    <p>
        <span><b>firstname:</b>{prop.lastName}</span>
        <span><b>lastname:</b>{prop.firstName}</span>
        <span><b>gender:</b>{prop.gender}</span>
        <span><b>heigth:</b>{prop.height}</span>
        <span><b>brith:</b>{prop.birth.toDateString()}</span>
    </p>
</section>
}
export default IdCard