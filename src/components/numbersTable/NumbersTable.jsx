import React from "react";
import "./NumbersTable.css"

export default class NumbersTable extends React.Component{
    render(){        
        let tiles = []
        for(let i=1; i<=this.props.limit; i++){
            tiles.push(i)
        } 

        return(
            <div className="NumbersTable">
                {tiles.map((tile)=> {
                    return tile % 2 === 0 ? <div className="tileRed"><p className="Number">{tile}</p></div> : <div className="tileWhite"><p className="Number">{tile}</p></div>
                    }
                )}
            </div>
        );
    }
}