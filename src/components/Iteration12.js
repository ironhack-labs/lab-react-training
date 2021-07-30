import { useState, useEffect} from "react";

const NumberTable = () => {
    const [counter, setCounter] = useState(1)
    const handleClickPlus = () => {
        let newCount = counter + 1
        setCounter(newCount)
    }
    const handleClickMinus = () => {
        let newCount = counter - 1
        if(newCount <= 0) {
            setCounter(1)
        } else {
            setCounter(newCount)
        }
    }

    const getBoard = () => {
        let board = []
        for (let i = 1; i <= counter; i++) {
            let style = { backgroundColor: i % 2 == 0 ? 'red' : 'white'}
            board.push(<li style={style} key={i}>{i}</li>)
        }
        return board
    }


    return (
        <div>
            <button onClick={handleClickMinus}>remove</button><span>{counter}</span> <button onClick={handleClickPlus}>add</button>
            <ul className="board">
                {getBoard().map(square => (
                    square
                ))}
            </ul>
        </div>
    )
}

export default NumberTable;