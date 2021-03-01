function BoxColor({r, g, b}) {    

    const style = {                
        backgroundColor: `rgb(${r},${g},${b})`,
        color:`white`,       
    }
    

    return (

        <div className="card text-center">
            <div className="card-body">
                <div style={ style }> rgb({r},{g},{b})</div>               
               
            </div>
        </div>


    )
}

BoxColor.defaultProps = { //propuiedad por defecto y si no cogerá la que se encuentre en el app.js
    fontcolor: 'red',
      //por defectio definimos que n haga nada lo hacmeos desde el counter
}

export default BoxColor