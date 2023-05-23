


const NumbersTable = ({ limit }) => {

    const box = []



    for (let i = 1; i <= limit; i++) {

        const color = i % 2 === 0 ? "violet" : "pink"

        box.push(
            <p key={i} style={{ backgroundColor: color, width: "200px", margin: "auto" }}>{i} </p>
        )
    }

    return (
        <h4>{box}</h4>

    )
}

export default NumbersTable