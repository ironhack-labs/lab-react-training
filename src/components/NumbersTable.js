import React from 'react';


function NumbersTable({limit}){
    return(
        <table align="center">
            <tbody>
                <tr>
                    {displayTable({limit})}
                </tr>
            </tbody>
        </table>
    )
}

function displayTable({limit}){
    console.log("?")
    let i = 0;
        while(i <= limit){
            console.log("i2",i)
            i++
            if(i >= limit){
                break;
            }
       
        }
        console.log("i",i)
       
    }
    
    



export default NumbersTable