const Random = ({ max, min }) => {

    let number = Math.floor(Math.random() * (max - min + 1) + min)

    return <h3>Random value between {max}  and {min}, = {number} </h3>



}

export default Random