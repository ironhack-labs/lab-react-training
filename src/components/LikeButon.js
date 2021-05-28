import React, {useState} from 'react'

export default function LikeButon() {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState('')
    const colors = ['purple','blue','green','yellow','orange','red']
    // {{count}%color.length}

    return (
        <div>
            <button className='m-4' style={{background: `${colors[count % colors.length]}`}}

            onClick={() => setCount((prevCount) => prevCount + 1 )}
            
            >
            {count}{color} Like 
            </button>
        </div>
    )
}
