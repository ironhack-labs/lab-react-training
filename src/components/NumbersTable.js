import React from 'react'

export default function NumbersTable(props) {
    const arr = [];
    for (let i = 1; i <= props.limit; i++) {
        let obj = {
            num: i,
        }
        if (i % 2 === 0) {
            obj.color = 'red'
        } else {
            obj.color = 'white'

        }
        i % 2 === 0 ? (obj.color = 'red') : obj.color = 'white';
        arr.push(obj)
    }
    const list = arr.map(el => {
        return (
            <div className="numbers-card" key={el.num} style={{backgroundColor: el.color}}>
                {el.num}
            </div>
        )
    })
    return (
        <>
            {list}
        </>
    )
}
