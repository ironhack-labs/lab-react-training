const NumbersTable = ({ limit }) => {
    const tableRows = [];

    for (let i = 1; i <= limit; i++) {
        const color = i % 2 === 0 ? 'red' : 'black';
        tableRows.push(
            <tr key={i}>
                <td style={{ color }}>{i}</td>
            </tr>
        );
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Number</th>
                </tr>
            </thead>
            <tbody>{tableRows}</tbody>
        </table>
    );
};

export default NumbersTable;
