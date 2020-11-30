import React, {useState} from 'react'

function ButtonFunc() {
    
    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={ () => { setCount(count-1)  }  } >{count} Dislike</button>
        </div>
    )
}

export default ButtonFunc
