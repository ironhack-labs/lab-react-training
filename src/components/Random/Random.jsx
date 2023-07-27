const Random = ({ min, max }) => {

    const number = Math.floor(Math.random() * (max - min + 1)) + min;


    return <p><strong>{number}</strong>  </p>


}

export default Random