const ranNum = (min,max) => Math.floor(Math.random() * (max - min) + min)

const Random = ({min,max }) => {
    return (
        <div>
            <p> {`Valor random entre ${min} and ${max} => ${ranNum(min,max)}`} </p>
        </div>
    )
}

export default Random