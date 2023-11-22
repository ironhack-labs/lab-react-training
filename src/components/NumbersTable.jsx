function NumbersTable({ limit }) {
    const arr = []
    for (let i = 0; i <= limit; i++) {
        arr.push(i)
    }


    const red = {
        backgroundColor: "red",
        padding: "20px",
        border: "2px solid black",
        display: "inline-flex"
    }

    const white = {
        backgroundColor: "white",
        padding: "20px",
        border: "2px solid black",
        display: "inline-flex"
    }
    return (arr.map(e => {
        return <span style={e % 2 == 0 ? red : white}>{e}</span>;

    }))

}
export default NumbersTable