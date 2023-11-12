function NumbersTable(props) {
    let numbersArray = []

    for (let i = 1; i <= props.limit; i++) {
        let numberStyle = {
            width: '100px',
            height: '100px',
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '',
        };

        if (i % 2 == 0) {
            numberStyle.backgroundColor = 'red';
        } else {
            numberStyle.backgroundColor = 'white';
        }

        const newNumber = {
            number: i,
            style: numberStyle,
        }

        numbersArray.push(newNumber);
    }

    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap'
    }

    return (
        <div style={containerStyle}>
            {numbersArray.map(number => {
                return (
                    <div style={number.style} key={number.number}>
                        {number.number}
                    </div>
                )
            })}
        </div>
    )
}

export default NumbersTable;