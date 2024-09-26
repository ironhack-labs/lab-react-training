
const NumbersandTables = ({ limit }) => {
    const numbers = []
    for (let i = 1; i < limit; i++) {
        const color = i % 2 == 0 ? 'green' : 'white'
        numbers.push(
            <div pepe={i} style={{ backgroundColor: color }}>
                {i}
            </div>
        );
    }
    return (
        <div>
            <table>

                <tr>
                    <td>{numbers[0]}</td>
                    <td>{numbers[1]}</td>
                    <td>{numbers[2]}</td>
                    <td>{numbers[3]}</td>
                    <td>{numbers[4]}</td>
                    <td>{numbers[5]}</td>
                    <td>{numbers[6]}</td>
                    <td>{numbers[11]}</td>
                </tr>
                <tr>
                    <td>{numbers[6]}</td>
                    <td>{numbers[7]}</td>
                    <td>{numbers[8]}</td>
                    <td>{numbers[9]}</td>
                    <td>{numbers[10]}</td>
                    <td>{numbers[11]}</td>
                </tr>
            </table>
        </div >
    )
}
export default NumbersandTables