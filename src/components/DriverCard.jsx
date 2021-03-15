import React from 'react'

function DriverCard(props) {
    function stars(star){
        const number = Math.round(star)
        switch(number) {
            case 5:
                return '★★★★★'
            case 4:
                return '★★★★☆'
            case 3:
                return '★★★☆☆'
            case 2:
                return '★★☆☆☆'
            case 1:
                return '★☆☆☆☆'
            case 0:
                return '☆☆☆☆☆'
            default:
                return '';  
        }
    };
    return (
        <div style={{ color: 'white', position:'relative', display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center', width:600, height:150, backgroundColor: 'blue', margin:20, borderRadius:20}}>
            <div style={{position:'absolute', top:10}}>
            <img style={{width:50, height:50, borderRadius:30}}src={props.img} alt={props.img}/>
            <h2 style={{margin:0,padding:0}}>{props.name}</h2>
            <h2 style={{margin:0,padding:0}}>{stars(props.rating)}</h2>
<p style={{margin:0,padding:0}}><span>{props.car.model}</span>{props.car.licensePlate}</p>
</div>
        </div>
    )
}

export default DriverCard
