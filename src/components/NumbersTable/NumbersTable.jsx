const NumbersTable = ({ limit }) => {
    let numbersArray = []
    let counter = 1
    while (numbersArray.length > limit) {
        numbersArray.push(counter)
        counter++
    }
}
export default NumbersTable