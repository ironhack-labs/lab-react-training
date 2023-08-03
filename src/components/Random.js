const Random = ({min, max}) => {

    const border = {
        border: "solid black 1px",
        padding: "5px"
    }

    const random = Math.floor(Math.random() * (max - min)) + min;

    return <p style={border}>Random value between {min} and {max} = {random}</p>
}

export default Random;