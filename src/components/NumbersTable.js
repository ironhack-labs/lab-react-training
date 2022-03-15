//jshint esversion:8

export const NumbersTable = ({ limit }) => {

    let numbers = [];

    for (let i = 1; i <= limit; i++) {
        numbers.push(i);
    }
    
    return (

        <>
            {numbers.map((number, index) => {
                
                if(number % 2 === 0) {
                    return <span style={{backgroundColor: "#F00"}} key={index}>{number}</span>
                } else {
                    return <span style={{backgroundColor: "#FFF"}} key={index}>{number}</span>
                }
            })}
        </>
    );
    
};
