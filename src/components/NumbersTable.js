import React from "react";

const NumbersTable = ({limit}) => {
    const numbers = Array.from({length: limit}, (_, index) => index + 1);

    return (
        <div>
            <ul
            style={{
                    istStyle: "none",
                    padding: 0,
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
            }}>

             {numbers.map((number) => (
                <li key={number} 
                    style={{
                        backgroundColor: number % 2 === 0 ? 'red' : 'transparent', 
                        width: '40px', 
                        height: '40px',
                        margin: '5px',
                        listStyle: 'none',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'black',
                        }}>
                    {number}
                </li>
             ))}
            </ul>
        </div>
    );

};

export default NumbersTable;