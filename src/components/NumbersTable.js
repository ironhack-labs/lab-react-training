import React, {useState} from 'react'

export default function NumbersTable({limit}) {
    const [color, setColor] = useState('red')
    function tableCreator(number, col){
        let array = []
        for(let i = 1; i < number + 1; i++){

            if(i % 2 === 0){
                array.push(<div className='number-table' style={{width: '100px', height: '100px', background: 'red'}}>{i}</div>)
            }else {
                array.push(<div className='number-table' style={{width: '100px', height: '100px', background: 'white'}}>{i}</div>)
            }

        }
        return array
    }

    return (
        <div className='table'>
            {tableCreator(limit, color)}
        </div>
    )
}

