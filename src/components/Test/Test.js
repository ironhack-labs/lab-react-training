import React from 'react';
import './Test.css'

function Test() {
    const list = [1, 2, 3, 4, 5, 6, 7];
//npm nanoid --->uuid
    return <div className='background'>
        {list.map((num, idx) => <p key={num}>{num}</p>)}
    </div>
}
console.log('Call', Test())
console.log('Test', <Test />)

//Render 1
//<p>Hola</p>
//<h1>Hola</h1>

//Render 2
//<p>Pablo</p>
//<h1>Hola</h1>

//List 1
//<h1 key=1>tomas</h1>
//<p key=2>tomas</p>

//list 2
//<p key=2>tomas</p>
//<h1 key=1>tomas</h1>

export default Test
