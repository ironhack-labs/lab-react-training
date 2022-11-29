



const NumbersTable = (props) => {
    const arrayNumber = [...Array(props.limit).keys()]

    return (
        <>
            {arrayNumber.map((elm, index) =>
                <div className="square" key={index}>
                    <p>{elm}</p>
                </div>)}
        </>
    )

}

export default NumbersTable