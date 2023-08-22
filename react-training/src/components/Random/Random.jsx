const Random = ({ min, max }) => {

    const RandomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return (
        <>
            <p style={{ border: '2px solid black', textAlign: 'start' }}>Random value between {min} and {max} =&#62;  {RandomNum}</p>
        </>
    )
}

export default Random