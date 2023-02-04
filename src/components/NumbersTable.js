function NumbersTable({ limit }) {

    const myArray = Array.from({ length: limit }, (value, index) => index + 1)

    function isEven(number) {

        if (number % 2 === 0) {
            return <div style={{ backgroundColor: 'red', padding: '40px', border: "2px solid black" }}><p>{number}</p></div>
        } else {
            return <div style={{ backgroundColor: 'none', padding: '40px', border: "2px solid black" }}><p>{number}</p></div>
        }
    }


    return (
        <div style={{ display: 'flex', width: "480px", flexWrap: "wrap" }}>
            {myArray.map((value, index) => {
                return (

                    <div key={Date.now() + Math.random()}>
                        {value % 2 === 0 ? <div style={{ backgroundColor: 'red', padding: '40px', border: "2px solid black" }}><p>{value}</p></div>
                            : <div style={{ backgroundColor: 'none', padding: '40px', border: "2px solid black" }}><p>{value}</p></div>}

                        {/* HOW DO I WRITE A IF INSTEAD OF USING Ternary Operation? */}
                        {/* HOW DO I WRITE A IF INSTEAD OF USING Ternary Operation? */}
                        {/* HOW DO I WRITE A IF INSTEAD OF USING Ternary Operation? */}
                        {/* HOW DO I WRITE A IF INSTEAD OF USING Ternary Operation? */}
                        {/* NOT RECOMENDABLE. WE SHOULD CREATE A FUNCTION THAT TREATS THAT ABOVE  */}

                        {/* OR */}
                        {isEven(value)}

                    </div>




                )
            })}
        </div>
    )
}


export default NumbersTable;