import React from 'react'

const NumbersTable = (props) => {
    const listNumber = [];            //lista de numeros 
    const counterListNumber = () => {
        for(let i = 1; i <= props.limit; i++){        //1 ao limit, coloca no array que estava vazio
            listNumber.push(i)
        }
        return listNumber
    } 
    counterListNumber()

  return (
    <div>
        <table>
            <body>
                <tr>
                    {listNumber.map((number) => {
                        return  <td style={{backgroundColor: number % 2 === 0 ? 'red' : 'white', border: '2px solid black', width: 50, height: 50, fontSize: 20}}>
                                    {number}
                                </td>
                    })}
                </tr>
            </body>
        </table>
    </div>
  )
}

export default NumbersTable